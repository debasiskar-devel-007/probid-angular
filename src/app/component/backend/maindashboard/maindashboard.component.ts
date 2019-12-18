import { Component, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.css']
})
export class MaindashboardComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;

public userCookies: any;
public user_full_name: any = '';

socialAdvLists: socialAdvos[];
public rsvp_list: any = '';
public saveSearch_list: any = '';
public ststus: number;

 
public rsvpIndex:any=2;
public saveSearchIndex:any=10;



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
  public crsvplist:any ='';
  public count:any ='';



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


    const ELEMENT_DATA: PeriodicElement[] = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];
    
   }

  ngOnInit() {
    this.activatedRoute.data.forEach((data:any) => {
      // this.crsvplist = data.fordashboard.result.save_search;

      this.rsvp_list = data.rsvp.result.currentRsvp;

      this.saveSearch_list = data.rsvp.result.save_search;
      this.count = data.rsvp.result;

      console.log('dvfdgfhg', this.saveSearch_list)
    })

   

  }




}

export class socialAdvos {
  Id: String;
  title_name: String;
  image_URL: String;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}