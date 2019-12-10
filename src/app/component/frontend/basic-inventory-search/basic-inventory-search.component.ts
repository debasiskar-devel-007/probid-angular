import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-basic-inventory-search',
  templateUrl: './basic-inventory-search.component.html',
  styleUrls: ['./basic-inventory-search.component.css']
})
export class BasicInventorySearchComponent implements OnInit {

      public inventoryCustomerForm:FormGroup;
      public stateList: any;
      public inventory_search_list:any;
      public make_list: any;
      public type_list: any;
      public model_list: any;
      public year_list: any;
      public type = '';
      public year = '';
      public make = '';

      constructor(public fb:FormBuilder,
        public apiService:ApiService,
        public activatedRoute:ActivatedRoute,
        public http:HttpClient,
        private readonly meta: MetaService ) {
        this.meta.setTitle('ProBid Auto - Inventory');
        this.meta.setTag('og:description', 'Locate the Pre-Owned Car of your desire at the ProBid Auto Inventory using Basic, as well as Advanced, Search Parameters to make your Car Search easy and convenient, while also saving you loads of time, effort and money');
        this.meta.setTag('twitter:description', 'Locate the Pre-Owned Car of your desire at the ProBid Auto Inventory using Basic, as well as Advanced, Search Parameters to make your Car Search easy and convenient, while also saving you loads of time, effort and money');
        this.meta.setTag('og:keyword', 'Pre-Owned Car Inventory, ProBid Auto Vehicle Inventory, ProBid Auto Inventory');
        this.meta.setTag('twitter:keyword', 'Pre-Owned Car Inventory, ProBid Auto Vehicle Inventory, ProBid Auto Inventory');
        this.meta.setTag('og:title', 'ProBid Auto - Inventory');
        this.meta.setTag('twitter:title', 'ProBid Auto - Inventory');
        this.meta.setTag('og:type', 'website');
        this.meta.setTag('og:image', '../../assets/images/logomain.png');
        this.meta.setTag('twitter:image', '../../assets/images/logomain.png');

    this.generateForm();
    this.getStateList();
      }

      ngOnInit() {

        //for make,model,year,type drop down list
    this.activatedRoute.data.forEach((data)=>{
      this.inventory_search_list=data.inventory_search
      this.make_list = this.inventory_search_list.result.manage_make;
    this.model_list = this.inventory_search_list.result.manage_model;
      this.type_list = this.inventory_search_list.result.manage_type;
      this.year_list = this.inventory_search_list.result.manage_year;
      console.log('>>>>>>',this.inventory_search_list)
    })

      }
      getStateList() {
        this.apiService.getJsonObject('assets/data/states.json').subscribe(response => {
          let result: any = {};
          result = response;
          this.stateList = result;
          console.log(this.stateList)
        })
      }

    //___________generate form for inventory customer search________________//

      generateForm(){
        this.inventoryCustomerForm=this.fb.group({
          type:[''],
          make:[''],
          model:[''],
          year:[''],
          vehicle:[''],
          trim:[''],
          vin:[''],
          state:[''],
          zip:[''],

        })
      }

      //____________search function for inventory customer search_________________//

      inventoryCustomerSearch(){

        console.log('>>>',this.inventoryCustomerForm.value)
        if(this.inventoryCustomerForm.valid){
          console.log('>>>',this.inventoryCustomerForm.value)


        // let api_key="https://marketcheck-prod.apigee.net/v1/search?api_key=OoH93hQWfPpsKtGbfoHTfBrGUjyv77iy"

        let yearVal=this.inventoryCustomerForm.value.year;
        console.log("*****",yearVal)
        let typeVal=this.inventoryCustomerForm.value.type;
        let makeVal=this.inventoryCustomerForm.value.make;
        let modelVal=this.inventoryCustomerForm.value.model;

    if (typeVal != null && typeVal != '' && typeVal.length>=0) {
      this.type = "&0seller_type="+typeVal
    }
    if (yearVal != null && yearVal != '' && yearVal.length>=0) {
      this.year = "&year="+yearVal
    }
    if (makeVal != null && makeVal != '' && makeVal.length>=0) {
      this.make = "&make="+makeVal
    }
    console.log('make out',this.make, makeVal.length)

    let search_link = this.apiService.inventory_url+this.type+this.year+this.make;
        console.log('+++++++++',search_link)

            this.http.get(search_link).subscribe((res)=>{
            let result:any;
            result=res
            console.log('>>>>',result.listings)

          })

        }

      }

    }
