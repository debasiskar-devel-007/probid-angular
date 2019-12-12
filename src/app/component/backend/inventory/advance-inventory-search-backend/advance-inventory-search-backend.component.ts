import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-advance-inventory-search-backend',
  templateUrl: './advance-inventory-search-backend.component.html',
  styleUrls: ['./advance-inventory-search-backend.component.css']
})
export class AdvanceInventorySearchBackendComponent implements OnInit {

  public advanceInventoryCustomerForm: FormGroup;
  public stateList: any;
  public inventory_search_list: any;
  public make_list: any;
  public type_list: any;
  public model_list: any;
  public year_list: any;
  public type = '';
  public year = '';
  public make = '';

  constructor(public fb: FormBuilder,
    public apiService: ApiService,
    public activatedRoute: ActivatedRoute,
    public http: HttpClient,
    private readonly meta: MetaService) {

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
    this.activatedRoute.data.forEach((data) => {
      this.inventory_search_list = data.inventory_search
      this.make_list = this.inventory_search_list.result.manage_make;
      this.model_list = this.inventory_search_list.result.manage_model;
      this.type_list = this.inventory_search_list.result.manage_type;
      this.year_list = this.inventory_search_list.result.manage_year;
      console.log('>>>>>>', this.inventory_search_list)
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

  generateForm() {
    this.advanceInventoryCustomerForm = this.fb.group({
      type: [''],
      make: [''],
      model: [''],
      year: [''],
      vehicle: [''],
      trim: [''],
      vin: [''],
      state: [''],
      zip: [''],

    })
  }

  advanceInventoryCustomerSearch() {
    if (this.advanceInventoryCustomerForm.valid) {
      let yearVal = this.advanceInventoryCustomerForm.value.year;
      let typeVal = this.advanceInventoryCustomerForm.value.type;
      let makeVal = this.advanceInventoryCustomerForm.value.make;
      let modelVal = this.advanceInventoryCustomerForm.value.model;

      if (typeVal != null && typeVal != '' && typeVal.length >= 0) {
        this.type = "&0seller_type=" + typeVal
      }
      if (yearVal != null && yearVal != '' && yearVal.length >= 0) {
        this.year = "&year=" + yearVal
      }
      if (makeVal != null && makeVal != '' && makeVal.length >= 0) {
        this.make = "&make=" + makeVal
      }
      let search_link = this.apiService.inventory_url + this.type + this.year + this.make;
      this.http.get(search_link).subscribe((res: any) => {
        console.log('>>>>', res.listings)

      })

    }

  }

}
