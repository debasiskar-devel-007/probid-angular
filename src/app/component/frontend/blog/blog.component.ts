import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import * as moment from 'moment';
import { CookieService } from 'ngx-cookie-service';

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


  constructor(public activatedRoute: ActivatedRoute, public apiService: ApiService) { }


  showMoreFunc(){
    this.indexval = this.indexval + 3;   
    console.log(this.indexval);
  }

  ngOnInit() {

    let data: any = {};
    data = {
      source:"blogs_view",
      endpoint: "datalist"
    }
    this.apiService.getDatalist(data).subscribe((res)=>{
       let result: any = {};
       result = res;
       this.blogList = result.res;
       console.warn(this.blogList);
    })

  }
}