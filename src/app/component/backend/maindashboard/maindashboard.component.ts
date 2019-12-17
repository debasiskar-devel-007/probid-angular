import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { HttpClient } from '@angular/common/http';
import { MetaService } from '@ngx-meta/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.css']
})
export class MaindashboardComponent implements OnInit {
public userCookies: any;
public user_full_name: any = '';

socialAdvLists: socialAdvos[];
public rsvp_list: any = '';
public ststus: number;

 
public indexval1:any=2;



public errorMsg: string = '';
  public stateList: any;
  public inventory_search_list: any;
  public make_list: any;
  public type_list: any;
  public model_list: any;
  public year_list: any;
  public type: string = '';
  public year: string = '';
  public make: string = '';
  public model: string = '';
  public vin: string = '';
  public trim: string = '';
  public vehicle: string = '';
  public state: string = '';
  public zip: string = '';
  public search: any;
  public user_details:any;
  public user_id: string = '';
  public modalImg: string = '';
  public isFavorite: number = 0;
  public customerList: any = '';
  public customur_id: any = '';



  constructor(public cookieService: CookieService, public activatedRoute: ActivatedRoute, public apiService: ApiService, public http: HttpClient, public dialog: MatDialog) {
    

    this.socialAdvLists = [{ Id: '1001', title_name: 'BMW 535I, NAVI, LEATHER, ABS', image_URL: '../../../../assets/images/adm-socialadvo-img1.jpg' },
    { Id: '1002', title_name: 'BMW 535I, NAVI, LEATHER, ABS', image_URL: '../../../../assets/images/adm-socialadvo-img2.jpg' },
    { Id: '1003', title_name: 'BMW 535I, NAVI, LEATHER, ABS', image_URL: '../../../../assets/images/adm-socialadvo-img3.jpg' },
    { Id: '1004', title_name: 'BMW 535I, NAVI, LEATHER, ABS', image_URL: '../../../../assets/images/adm-socialadvo-img4.jpg' },
    { Id: '1005', title_name: 'BMW 535I, NAVI, LEATHER, ABS', image_URL: '../../../../assets/images/adm-socialadvo-img5.jpg' },
    { Id: '1006', title_name: 'BMW 535I, NAVI, LEATHER, ABS', image_URL: '../../../../assets/images/adm-socialadvo-img6.jpg' },
    { Id: '1007', title_name: 'BMW 535I, NAVI, LEATHER, ABS', image_URL: '../../../../assets/images/adm-socialadvo-img7.jpg' },
    { Id: '1008', title_name: 'BMW 535I, NAVI, LEATHER, ABS', image_URL: '../../../../assets/images/adm-socialadvo-img8.jpg' },
    ];


    if (this.cookieService.get('user_details') != undefined && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != '') {
      this.user_details = JSON.parse(this.cookieService.get('user_details'));
      this.user_id = this.user_details._id;
      console.log(this.user_id);
      
      if(this.user_details.type == "salesrep") {
        let data: any = {
          endpoint: 'datalist',
          source: 'type_customer_view',
          condition: {
            "id":  this.user_id
          }
        }
        this.apiService.getDatalist(data).subscribe((res:any)=>{
          this.customerList = res.res;
          console.log(this.customerList);
        });
    
      }
    }

    // console.log(this.cookieService.getAll());
    // this.userCookies = JSON.parse(this.cookieService.get('user_details'));

    // console.log(this.userCookies.firstname);
    // this.user_full_name = this.userCookies.firstname +' '+this.userCookies.lastname;
    // console.log(this.user_full_name);

    
   }

  ngOnInit() {
    this.activatedRoute.data.forEach((data:any) => {
      // console.log(data)
      this.rsvp_list = data.rsvp.res;
      // this.rsvp_list1 = rsvp_list.dasbor.res;
    })

    this.activatedRoute.data.forEach((data) => {
      console.log(data)
      this.search = data.inventory_search.res;
    });


  }

  changeStatus(item: any, val: any) {
    console.log('rsvpSend status',item, val)
    let endpoint: any = "addorupdatedata";
    item.status = val;
    let card_data:any = {
      card_data: item,
      id:item._id
    }
    let data: any = {
      data: card_data,
      source: "send_for_rsvp",
    };
      this.apiService.CustomRequest(data, endpoint).subscribe((res:any) => {
        console.log(res);
        (res.status == "success");
        this.getdata();
      });
  }


  getdata() {
    let data: any = {
      endpoint: 'datalist',
      source: 'send_rsvp_view',
      // condition: {
      //   "id":  this.user_id
      // }
    }
    this.apiService.getDatalist(data).subscribe((res:any)=>{
      this.rsvp_list = res.res;
      console.log(this.rsvp_list);
    });
  }


  
  // getData(){
  //   let data: any = {
  //     endpoint: 'datalist',
  //     source: 'save_favorite_view'
  //   }
  //   this.apiService.getDatalist(data).subscribe((res:any)=>{
  //     this.search = res.res;
  //     this.loader = false;
  //   })
  // }
  

}

export class socialAdvos {
  Id: String;
  title_name: String;
  image_URL: String;
}
