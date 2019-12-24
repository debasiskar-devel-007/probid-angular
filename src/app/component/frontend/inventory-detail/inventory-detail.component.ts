import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styleUrls: ['./inventory-detail.component.css']
})
export class InventoryDetailComponent implements OnInit {

  public data:any;
  public indexImg:any;
  public item:any;

  constructor(public activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.forEach((res)=>{
      let result:any
      result=res.inventory_details.res;
      console.log('inventory_details >>',result)

      this.data=result[0].card_data;
      // this.item=this.data.financing_options;

      console.log('card_data',this.data)

    })
   
  }

  //show details
  showImage(item:any,i:any){
    console.log('>>>',item,i)
    this.indexImg=i

  }

}
