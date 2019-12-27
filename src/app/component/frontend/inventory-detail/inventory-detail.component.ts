import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { BasicInventorySearchBackendComponent } from '../../backend/inventory/basic-inventory-search-backend/basic-inventory-search-backend.component';
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';


export interface DialogData {
  errorMsg: string;
}
import { Observable, Subject, Subscription } from 'rxjs';


@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styleUrls: ['./inventory-detail.component.css']
})
export class InventoryDetailComponent implements OnInit {

  public data: any;
  public indexImg: any;
  public item: any;
  public itemVal: any;
  public message:any="Are you sure you want to delete this?";


  carouselOptions = {
    margin: 5,
    nav: true,
    loop: true,
    navText: ["<div class='nav-btn prev-slide'><i class='material-icons'>keyboard_backspace</i></div>", "<div class='nav-btn next-slide'><i class='material-icons'>keyboard_backspace</i></div>"],
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 3,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        center: true,
        loop: true,
        nav: true,
      },
      600: {
        items: 4,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        center: true,
        loop: true,
        nav: true,
      },
      991: {
        items: 5,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        center: true,
        loop: true,
        nav: true,
      },
      992: {
        items: 8,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        center: true,
        loop: true,
        nav: true,
        dot: false,
      }
    }
  }

  public saveList: any;
  public indexVal: any = 4;
  public makeName: any;
  public user_details: any;
  public user_id: any;
  public customerList: any;
  public customer_id: any;
  public errorMsg: any = 'Please Choose customer'


  private subjectForServerUrl = new Subject<any>();


  constructor(public activatedRoute:ActivatedRoute,public apiService:ApiService ,public observableData:BasicInventorySearchBackendComponent,public cookieService:CookieService,public snack: MatSnackBar,public dialog:MatDialog,public router:Router) {


    if (this.cookieService.get('user_details') != undefined && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != '') {
      this.user_details = JSON.parse(this.cookieService.get('user_details'));
      this.user_id = this.user_details._id;
      console.log(this.user_id);
      console.log('type>>', this.user_details.type)
    }
  }

  setServerUrl(value: any) {
    this.subjectForServerUrl.next(value);
  }
  public clearServerUrl() {
    this.subjectForServerUrl.next(null);
  }
  public getServerUrl(): Observable<any> {
    console.log('=====+++----____',this.subjectForServerUrl.asObservable());
    return this.subjectForServerUrl.asObservable();
  }

  ngOnInit() {


    this.activatedRoute.data.forEach((res) => {
      let result: any
      result = res.inventory_details.res;
      console.log('inventory_details >>', result)

      this.data = result[0].card_data;
      // this.item=this.data.financing_options;

      console.log('card_data', this.data)

      this.makeName = this.data.build.make;
      console.log('makeName >>', this.makeName)

      this.itemVal = result[0]._id;
      console.log('**>>', this.itemVal)



    })
    this.saveSearch()

    //for obserable data
    // const data=this.observableData.dataObserve;
    // this.data.subscribe(res=>{
    //   console.log('observ>>',res)
    // })

    // this.observableData



    if (this.user_details.type == "salesrep") {
      let data: any = {
        endpoint: 'datalist',
        source: 'user',
        condition: {
          "salesrep": this.user_id,
          "type": "customer"
        }
      }
      this.apiService.getDatalist(data).subscribe((res: any) => {
        this.customerList = res.res;
        console.log('.>>>>>>>', this.customerList);
      });

    }


  }

  //show details
  showImage(item: any, i: any) {
    console.log('>>>', item, i)
    this.indexImg = i

  }

  //datalist for save search
  saveSearch() {
    let data: any = {
      source: 'save_favorite',
      // condition:{
      //   added_by:this.user_id
      // }
    }
    this.apiService.getDataForDatalist(data).subscribe((res: any) => {
      console.log('save >>', res.res);

      this.saveList = res.res;
    });
  }

  //for rsvp send
  addRsvp(val: any, itemData: any) {
    console.log('val-rsvp', val, itemData)


    if (this.user_details.type == 'salesrep') {

      if (this.customer_id != '' && this.customer_id != null) {
        let endpoint: any = "addorupdatedata";
        //  result.added_by = this.user_id;
        itemData.status = 0;
        if (this.user_details.type == 'salesrep') {
        itemData.added_for = this.customer_id;
        } else {
        itemData.added_for = this.user_id;
        }
        let card_data: any = {
          card_data: itemData
        }
        let data: any = {
          data: card_data,
          source: "send_for_rsvp",
        };
        console.log(data)
        this.apiService.CustomRequest(data, endpoint).subscribe((res: any) => {
          console.log(res);
          if (res.status == "success") {


            this.snack.open('RSVP Added Successfully', 'Ok', {
              duration: 4000
            })

            let data: any = {
              id: val,
              source: 'save_favorite'
            }
            this.apiService.deleteSingleData1(data).subscribe((res: any) => {
              console.log(res);
              if (res.status == 'success') {
                // this.search.splice(i,i+1);
                console.log('success')
              }
            })

          }
        });
      }
      else {

        this.customer_id = ''
        this.errorMsg;
        console.log(this.errorMsg)

      }

    }

    if(this.user_details.type =='customer'){
      
      let endpoint: any = "addorupdatedata";
      itemData.added_by = this.user_id;
      itemData.status = 0;
      
      itemData.added_for = this.user_id;
  
        let card_data:any = {
          card_data: itemData
        }
        let data: any = {
          data: card_data,
          source: "send_for_rsvp",
        };
        console.log(data)
          this.apiService.CustomRequest(data, endpoint).subscribe((res:any) => {
            console.log(res);
            if(res.status == "success"){
  
              this.snack.open('RSVP Added Successfully','Ok',{
                duration:4000
              })

              if(this.user_details.type == 'salesrep'){
                this.router.navigateByUrl('/rsvp-salesrep');
              }
              if(this.user_details.type == 'customer'){
                this.router.navigateByUrl('/rsvp-customer');
              }

              let data: any = {
                id:val,
                source: 'save_favorite'
              }
              this.apiService.deleteSingleData1(data).subscribe((res: any)=>{
                console.log(res);
                if (res.status == 'success') {
                  // this.search.splice(i,i+1);
                  console.log('success');
                  
                }
              })
  
  
            }
          })
  
    }

  }

  removeRsvp(val: any,item:any) {
    console.log('remove-rsvp', val,item)
    const dialogRef = this.dialog.open(RemoveRsvpComponent, {
      width: '250px',
      data:this.message

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      
        if(result=='yes'){
    let data: any = {
      id:val,
      source: 'save_favorite'
    }
    this.apiService.deleteSingleData1(data).subscribe((res: any)=>{
      console.log(res);
      if (res.status == 'success') {
        // this.search.splice(index,index+1);
        this.snack.open('Record Removed Successfully..!','',{duration:2000})


        if(this.user_details.type == 'admin'){
          this.router.navigateByUrl('/save-search-admin')
        }
        if(this.user_details.type == 'salesrep'){
          this.router.navigateByUrl('/save-search-rep')
        }
        if(this.user_details.type == 'customer'){
          this.router.navigateByUrl('/save-search-castomer')
        }
       
        
        
      }
    })
  }
})

  }

}


//modal for remove record

@Component({
  selector:'app-removeRsvp',
  templateUrl:'./removeRsvp.html'
})
export class RemoveRsvpComponent {
  constructor( public dialogRef: MatDialogRef<RemoveRsvpComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData){

  }
}
