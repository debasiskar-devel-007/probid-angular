import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import {BasicInventorySearchBackendComponent} from '../../backend/inventory/basic-inventory-search-backend/basic-inventory-search-backend.component';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subject, Subscription } from 'rxjs';


@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styleUrls: ['./inventory-detail.component.css']
})
export class InventoryDetailComponent implements OnInit {

  public data:any;
  public indexImg:any;
  public item:any;

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
        dot:false,
      }
    }
  }

  public saveList:any;
  public indexVal:any=4;
  public makeName:any;
  public user_details:any;
  public user_id:any;

  private subjectForServerUrl = new Subject<any>();


  constructor(public activatedRoute:ActivatedRoute,public apiService:ApiService ,public observableData:BasicInventorySearchBackendComponent,public cookieService:CookieService) {


    if (this.cookieService.get('user_details') != undefined && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != '') {
      this.user_details = JSON.parse(this.cookieService.get('user_details'));
      this.user_id = this.user_details._id;
      console.log(this.user_id);
      console.log('type>>',this.user_details.type)
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


    this.activatedRoute.data.forEach((res)=>{
      let result:any
      result=res.inventory_details.res;
      console.log('inventory_details >>',result)

      this.data=result[0].card_data;
      // this.item=this.data.financing_options;

      console.log('card_data',this.data)

      this.makeName=this.data.build.make;
      console.log('makeName >>',this.makeName)

    })
    this.saveSearch()

    //for obserable data
    // const data=this.observableData.dataObserve;
    // this.data.subscribe(res=>{
    //   console.log('observ>>',res)
    // })

    // this.observableData
    
  
  }

  //show details
  showImage(item:any,i:any){
    console.log('>>>',item,i)
    this.indexImg=i

  }

  //datalist for save search

  saveSearch(){
    let data: any = {
      source: 'save_favorite',
      // condition:{
      //   "card_data.build.make":this.makeName
      // }
    }
    this.apiService.getDataForDatalist(data).subscribe((res: any)=>{
      console.log('save >>',res.res);

      this.saveList=res.res;
  });
}




}
