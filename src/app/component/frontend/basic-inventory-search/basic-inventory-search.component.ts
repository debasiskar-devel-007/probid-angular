import { Component, OnInit, Inject } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

export interface DialogData {
  errorMsg: string;
}


@Component({
  selector: 'app-basic-inventory-search',
  templateUrl: './basic-inventory-search.component.html',
  styleUrls: ['./basic-inventory-search.component.css']
})
export class BasicInventorySearchComponent implements OnInit {
  public errorMsg: string = '';
  public inventoryCustomerForm: FormGroup;
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


  constructor(public fb: FormBuilder,
    public apiService: ApiService,
    public activatedRoute: ActivatedRoute,
    public http: HttpClient,
    private readonly meta: MetaService,
    public dialog: MatDialog,
    public cookieService: CookieService,
    public router: Router) {
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


if (this.cookieService.get('user_details') != undefined && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != '') {
  this.user_details = JSON.parse(this.cookieService.get('user_details'));
  this.user_id = this.user_details._id;
  console.log(this.user_id);
  
}


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
    })

  }
  getStateList() {
    this.apiService.getJsonObject('assets/data/states.json').subscribe((response: any) => {
      this.stateList = response;
    });
  }

  //___________generate form for inventory customer search________________//

  generateForm() {
    this.inventoryCustomerForm = this.fb.group({
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

  //____________search function for inventory customer search_________________//

  inventoryCustomerSearch() {
    if (this.inventoryCustomerForm.valid) {

      let yearVal = this.inventoryCustomerForm.value.year;
      let typeVal = this.inventoryCustomerForm.value.type;
      let makeVal = this.inventoryCustomerForm.value.make;
      let modelVal = this.inventoryCustomerForm.value.model;
      let vinVal = this.inventoryCustomerForm.value.vin;
      let trimVal = this.inventoryCustomerForm.value.trim;
      let vehicleVal = this.inventoryCustomerForm.value.vehicle;
      let stateVal = this.inventoryCustomerForm.value.state;
      let zipVal = this.inventoryCustomerForm.value.zip;

      if (typeVal != null && typeVal != '' && typeVal.length >= 0) {
        this.type = "&0seller_type=" + typeVal;
      }
      if (yearVal != null && yearVal != '' && yearVal.length >= 0) {
        this.year = "&year=" + yearVal;
      }
      if (makeVal != null && makeVal != '' && makeVal.length >= 0) {
        this.make = "&make=" + makeVal;
      }
      if (modelVal != null && modelVal != '' && modelVal.length >= 0) {
        this.model = "&model=" + modelVal;
      }
      if (vinVal != null && vinVal != '' && vinVal.length >= 0) {
        this.vin = "&vin=" + vinVal;
      }
      if (trimVal != null && trimVal != '' && trimVal.length >= 0) {
        this.trim = "&trim=" + trimVal;
      }
      if (vehicleVal != null && vehicleVal != '' && vehicleVal.length >= 0) {
        this.vehicle = "&vehicle_type=" + vehicleVal;
      }
      if (stateVal != null && stateVal != '' && stateVal.length >= 0) {
        this.state = "&state=" + stateVal;
      }
      if (zipVal != null && zipVal != '' && zipVal.length >= 0) {
        this.zip = "&zip=" + zipVal;
      }
      if (this.type != '' || this.year != '' || this.make != '' || this.vin != '' || this.trim != '' || this.vehicle != '' || this.state != '' || this.zip != '' || this.model != '') {

        let search_link = this.apiService.inventory_url + this.type + this.year + this.make + this.vin + this.trim + this.vehicle + this.state + this.zip + this.model;

        this.http.get(search_link).subscribe((res: any) => {
          this.search = res.listings;
          console.log('search list',this.search)

        })
      } else {
        this.errorMsg = "Please select at least one field";

        const dialogRef = this.dialog.open(errorDialog, {
          width: '250px',
          data: { errorMsg: this.errorMsg }
        });

      }


    }

  }
  gotologin(){
    this.router.navigateByUrl('/login'+this.router.url)
    console.log('/login'+this.router.url)
  }

  favorite(item: any) {
    console.log('this is favorite ')
    if (this.user_id  == '') {
      this.cookieService.set('favorite_car', item);
      setTimeout(() => {
        this.gotologin();
      }, 500);
   
    }
    this.cookieService.get('favorite_car')
  }

  rsvpSend(item: any) {
    let endpoint: any = "addorupdatedata";
    item.user_id = this.user_id;
    let card_data:any = {
      card_data: item
    }
    let data: any = {
      data: card_data,
      source: "send_for_rsvp",
    };
    console.log(data)
      this.apiService.CustomRequest(data, endpoint).subscribe((res:any) => {
        console.log(res);
        (res.status == "success")
      });

  }

  showimg(img: any){
    this.modalImg = img;
  }

}


@Component({
  selector: 'error',
  templateUrl: 'errorDialog.co.html',
})
export class errorDialog {

  constructor(
    public dialogRef: MatDialogRef<errorDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    console.log(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}