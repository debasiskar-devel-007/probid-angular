import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-basic-inventory-search-backend',
  templateUrl: './basic-inventory-search-backend.component.html',
  styleUrls: ['./basic-inventory-search-backend.component.css']
})
export class BasicInventorySearchBackendComponent implements OnInit {

  public inventoryCustomerForm:FormGroup
  public inventory_search_list:any;
  public make_list: any;
  public type_list: any;
  public model_list: any;
  public year_list: any;

  constructor(public fb:FormBuilder,public apiService:ApiService,public activatedRoute:ActivatedRoute,public http:HttpClient ) { 
this.generateForm();
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


//___________generate form for inventory customer search________________//

  generateForm(){
    this.inventoryCustomerForm=this.fb.group({
      type:[],
      make:[],
      model:[],
      year:[],
    })
  }

  //____________search function for inventory customer search_________________// 

  inventoryCustomerSearch(){
    if(this.inventoryCustomerForm.valid){
      console.log('>>>',this.inventoryCustomerForm.value)

    
    // let api_key="https://marketcheck-prod.apigee.net/v1/search?api_key=OoH93hQWfPpsKtGbfoHTfBrGUjyv77iy"

    let yearVal=this.inventoryCustomerForm.value.year;
    console.log("*****",yearVal)
    let typeVal=this.inventoryCustomerForm.value.type;
    let makeVal=this.inventoryCustomerForm.value.make;
    let modelVal=this.inventoryCustomerForm.value.model;


    let data="https://marketcheck-prod.apigee.net/v1/search?api_key=OoH93hQWfPpsKtGbfoHTfBrGUjyv77iy&0seller_type="+typeVal+"&year="+yearVal+"&make="+makeVal+"&highway_miles=500"

    console.log('+++++++++',data)
   
        this.http.get(data).subscribe((res)=>{
        let result:any;
        result=res
        console.log('>>>>',result.listings)

      })

    }
  
  }

}
