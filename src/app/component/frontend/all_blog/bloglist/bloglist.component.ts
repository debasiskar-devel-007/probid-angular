import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
 import{CookieService} from 'ngx-cookie-service';
 import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
 

    /************** lib list setup start here *************/
    public blogListConfig:any = {
      apiBaseUrl:this.ApiService.serverUrlDemo,
      listEndPoint: "datalist",
      datasource: "",
      tableName: "blog_category",
      updateurl: "addorupdatedata",
      editUrl: "blog-category/edit",
      jwtToken: "",
      deleteEndPoint: "deletesingledata",
      addLink: "/blog-category/add",
      view: "blog_category_view"
      
    }
    constructor( public router: Router, public activatedRoute: ActivatedRoute, public cookieService: CookieService,public ApiService:ApiService) { 

      this.activatedRoute.data.subscribe(resolveData => {
        this.blogListConfig.datasource = resolveData.blogCatList.res;
        this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');
        
      });
    }
  ngOnInit() {
    
    
  }

}
