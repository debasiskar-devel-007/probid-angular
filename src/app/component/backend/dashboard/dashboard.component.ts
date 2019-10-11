import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public formTitle: any = "Contact Us Listing Page";
  // public serverUrl: any = 'https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/';
  
  public getDataUrl: any = {
    endpoint: 'datalist',
    source: 'contactusForm'
  };
  public updateurl: any = "addorupdatedata";
  public deleteurl: any = {
    endpoint: "deletesingledata",
    source: "contactusForm"
  };
  public addEndpoint: any = 'demoappemailsend';
  // public getDataUrl: any = 'datalist';
  public contactUsAllDataHeaderSkip: any = ['_id'];
  public contactUsAllDataModifyHeader: any = { addresses: 'Addresses', emails: 'Emails', locationname: 'Location Name', phones: 'Phones' };

  public serverUrl: any = this.ApiService.serverUrlDemo;
  constructor(private readonly meta: MetaService, public ApiService: ApiService) {
   
    
    this.meta.setTitle('About us dynamic');
    this.meta.setTag('og:description', 'This is dynamic decription ');
    this.meta.setTag('og:title', 'This is dynamic title with meta og ');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://upload.wikimedia.org/wikipedia/commons/f/f8/superraton.jpg');

}

  ngOnInit() {
  }

}