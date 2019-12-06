import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(public fb:FormBuilder,public apiService:ApiService,public activatedRoute:ActivatedRoute ) { 
this.generateForm();
  }

  ngOnInit() {
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

      let data:any;
      data={

      }


    }
  
  }

}
