import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import * as moment from 'moment';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public savedUrl: any = [];
  public savedId: any = [];
  public blogList: any;
  public indexval:any = 3;


  public ConfigData: any = [
    { type: 'facebook', link: 'https://SoureshBanerjee.com' },
    { type: 'twitter', link: 'https://google.com' },
    { type: 'linkedin', link: 'https://jasonwatmore.com' },
    { type: 'tumbler', link:'material.angular.io' }
  ];
public tokenVal: any;

  constructor(public activatedRoute: ActivatedRoute, public apiService: ApiService, public _http: HttpClient) {

  
  }


  showMoreFunc(){
    this.indexval = this.indexval + 3;   
    console.log(this.indexval);
  }

  ngOnInit() {
   



      // console.log(this.tokenVal.length)

    let data: any = {};
    
    data = {
      source:"blogs_view",
      endpoint: "datalist"
    }

    this._http.get(this.apiService.serverUrlDemo + 'gettemptoken').subscribe((res: any)=>{
      this.tokenVal = res;

      console.log('token')
      console.log(this.tokenVal.token)
      console.log(this.tokenVal.token.length)
      if (res.status == 'success') {
         const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.tokenVal.token
      })
    };
    var result = this._http.post(this.apiService.serverUrlDemo + 'datalist', JSON.stringify(data), httpOptions).subscribe((res: any)=>{
      console.log(res);
      this.blogList = res.res;
      console.warn(this.blogList);
    });
      }
    });
  }
}