import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-basic-inventory-search-backend',
  templateUrl: './basic-inventory-search-backend.component.html',
  styleUrls: ['./basic-inventory-search-backend.component.css']
})
export class BasicInventorySearchBackendComponent implements OnInit {

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
  public model = '';
  public vin = '';
  public trim = '';
  public vehicle = '';
  public state = '';
  public zip = '';
  constructor(public fb:FormBuilder,public apiService:ApiService,public activatedRoute:ActivatedRoute,public http:HttpClient ) {

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
        let vinVal=this.inventoryCustomerForm.value.vin;
        let trimVal=this.inventoryCustomerForm.value.trim;
        let vehicleVal=this.inventoryCustomerForm.value.vehicle;
        let stateVal=this.inventoryCustomerForm.value.state;
        let zipVal=this.inventoryCustomerForm.value.zip;

    if (typeVal != null && typeVal != '' && typeVal.length>=0) {
      this.type = "&0seller_type="+typeVal;
    }
    if (yearVal != null && yearVal != '' && yearVal.length>=0) {
      this.year = "&year="+yearVal;
    }
    if (makeVal != null && makeVal != '' && makeVal.length>=0) {
      this.make = "&make="+makeVal;
    }
    if (modelVal != null && modelVal != '' && modelVal.length>=0) {
      this.model = "&model="+modelVal;
    }
    if (vinVal != null && vinVal != '' && vinVal.length>=0) {
      this.vin = "&vin="+vinVal;
    }
    if (trimVal != null && trimVal != '' && trimVal.length>=0) {
      this.trim = "&trim="+trimVal;
    }
    if (vehicleVal != null && vehicleVal != '' && vehicleVal.length>=0) {
      this.vehicle = "&vehicle_type="+vehicleVal;
    }
    if (stateVal != null && stateVal != '' && stateVal.length>=0) {
      this.state = "&state="+stateVal;
    }
    if (zipVal != null && zipVal != '' && zipVal.length>=0) {
      this.zip = "&zip="+zipVal;
    }


    let search_link = this.apiService.inventory_url+this.type+this.year+this.make+this.vin+ this.trim+this.vehicle+this.state+this.zip+this.model;
        console.log('+++++++++',search_link)

            this.http.get(search_link).subscribe((res)=>{
            let result:any;
            result=res
            console.log('>>>>',result.listings)

          })

        }

      }

    }
