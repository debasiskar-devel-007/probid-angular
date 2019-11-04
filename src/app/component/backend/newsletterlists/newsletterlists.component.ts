
import { ApiService } from 'src/app/api.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-newsletterlists',
  templateUrl: './newsletterlists.component.html',
  styleUrls: ['./newsletterlists.component.css']
})
export class NewsletterlistsComponent implements OnInit {

  apiBaseUrl:any= "https://63zzhpnoti.execute-api.us-east-1.amazonaws.com/production/api/";
  listEndPoint:any= "datalist";
  datasource:any= "";
  tableName: any="resources";
  updateurl:any= "addorupdatedata";
  editUrl:any= "resource/edit";
  jwtToken:any ="";
  deleteEndPoint:any= "deletesingledata";
  addLink:any ="/resource/add";
  view: any="resources_view";

  constructor( private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService ) { 
    
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.datasource = resolveData.newsLetterData.res;
      console.log("Newsletterdata",this.datasource);
      this.jwtToken = this.cookieService.get('jwtToken');
    });
  }
  
}


