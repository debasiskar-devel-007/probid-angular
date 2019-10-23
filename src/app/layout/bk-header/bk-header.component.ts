import { Component, OnInit, Inject  } from '@angular/core';
import { BkLeftdivComponent } from '../../../app/layout/bk-leftdiv/bk-leftdiv.component';
import { SidenavService } from '../../../app/services/sidenav.service';

import {MatDialog} from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { ApiService } from 'src/app/api.service';
import { HttpClient } from '@angular/common/http';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-bk-header',
  templateUrl: './bk-header.component.html',
  styleUrls: ['./bk-header.component.css']
})
export class BkHeaderComponent implements OnInit {
  public userCookies: any;
  public user_full_name: any = '';

  public type: any;
  public recphoneno: any;
  public recid: any;
  public sourceval = 'rep_recruiter_view';
  public sourceconditionval: any;
  public datalist: any;
  public allresourcecategory: any;
  public idis: any;
  public repdetails: any;
  public reptraininglessondetails: any;
  public consultantrole: any;
  public interval;
  public repDetailsNew: any = [];
  public videoCategoryarry: any = [];
  public checkOldCookie: any;
  public oldcookiedata: any;
  public gameplanButton:any = 0;
  public calenderaccess:any;


     
  public user_data: any;
  constructor(
    public cookieService: CookieService,
     private sidenav: SidenavService,
      public dialog: MatDialog,
       public router: Router,
        public Header: HeaderComponent,
    @Inject(WINDOW) private window: Window,
     public cookie: CookieService,
      private ApiService: ApiService,
       private _http: HttpClient
    ) {
  // setTimeout(()=>{
  //       this.getrepdetails();
  //     },500);
    // this.user_data = JSON.parse(this.cookieService.get('user_details'));
    // console.log(this.user_data);

  }
  toggleActive:boolean = false;
  toggleRightSidenav() {
    this.toggleActive = !this.toggleActive;
    this.sidenav.toggle();
    console.log('Clicked');
    
    
    
   }

   gotoHome(){
     console.log('ok')
     this.router.navigateByUrl('/home');
   }

  //  getrepdetails() {
  //   // const link = this.ApiService.nodesslurl + 'getrecvalues?token=' + this.cookie.get('jwttoken');
  //   const link = this.ApiService.nodesslurl + 'datalist?token=' + this.cookie.get('jwttoken');
  //   var data = { _id: this.cookie.get('userid') }
  //   this._http.post(link, data)
  //     .subscribe(res => {
  //       let result: any;
  //       result = res;
  //       if (result.status == 'error') {
  //       } else {
  //         this.repdetails = result.res;
  //         this.reptraininglessondetails = result.res2;
  //         /*console.log('this.repdetails');
  //         console.log(this.repdetails);*/
  //         /* console.log('this.reptraininglessondetails');
  //          console.log(this.reptraininglessondetails);*/
  //       }
  //     }, error => {
  //       console.log('Oooops!');
  //     });
  // }

  //  gototrainingsectionwithcat() {
  //   if (this.reptraininglessondetails != null) {
  //     console.log('this.reptraininglessondetails.trainingcategory');
  //     console.log(this.reptraininglessondetails.trainingcategory)
  //     var link = 'reptrainingcenter/' + this.reptraininglessondetails.trainingcategory;
  //     this.router.navigate([link]);
  //   } else {
  //     var link = 'reptrainingcenter/5d36d7256778e75a3d6c37ce';
  //     //   var link = 'reptrainingcenter/5c6d54656fac495dd5c209e9';
  //     this.router.navigate([link]);
  //   }
  // }

  ngOnInit() {
    // this.userCookies = JSON.parse(this.cookieService.get('user_details'));
  
    // console.log(this.userCookies);
    // this.user_full_name = this.userCookies.firstname +' '+this.userCookies.lastname;
    // console.log(this.user_full_name);
  }

  // getvideocatagory() {
  //   let link = this.ApiService.nodesslurl + 'datalist?token=' + this.cookie.get('jwttoken');
  //   console.log(link);
  //   this._http.post(link, { source: "videocategory_view_with_parent", condition: { status: true } })
  //     .subscribe(res => {
  //       let result;
  //       result = res;
  //       if (result.status == 'error') {

  //       } else {
  //         this.videoCategoryarry = [];
  //         this.videoCategoryarry = result.res;

  //       }
  //     }, error => {
  //       console.log('Oooops!');
  //       this.videoCategoryarry = [];
  //     });
  // }

}

