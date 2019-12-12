import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute, public router: Router,public apiService: ApiService , public cookieService:CookieService) { }
  public statusarray: any = [{val: 1, name: 'Active'}, {val: 2, name: 'Inactive'}, {val: 0, name: 'Pending'}]; 

  pendingmodelapplicationarray: any = [];
  pendingmodelapplicationarray_skip: any = ['_id','type','city','state','password','zip'];
  pendingmodelapplicationarray_detail_skip: any = ['_id'];
  updateendpoint = 'addorupdatedata';
  deleteendpoint = 'deletesingledata';
  tablename = 'salesrep';
  searchendpoint = 'datalist';
  editroute: any = 'editcustomer';
  modify_header_array: any = {
    'fullname': "Name",
    'phone': "Phone",
    'email':"Email",
    'address':'Location',
    'date added':'Date',
    'status':'status'
  };

   // this is use for  All type of search 
   search_settings:any={

    datesearch:[{startdatelabel:"Start Date",enddatelabel:"End Date",submit:"Search By Date",  field:"created_at"}],   // this is use for  date search 

    textsearch:[{label:"Search By email",field:'email'},{label:"Search By Full name",field:'name'}],  // this is use for  text search

    search:[{label:"Search By autocomplete",field:'name'}]     // this is use for  Autocomplete search
}
  ngOnInit() {
    this.activatedRoute.data.forEach(data=>{   
      this.pendingmodelapplicationarray=data.customerlist.res;
    })
  }

}
