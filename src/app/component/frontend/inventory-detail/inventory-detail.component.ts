import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


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

  constructor(public activatedRoute:ActivatedRoute,public apiService:ApiService) { }

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
      condition:{
        "make":this.makeName
      }
    }
    this.apiService.getDataForDatalist(data).subscribe((res: any)=>{
      console.log('save >>',res.res);

      this.saveList=res.res;
  });
}



}
