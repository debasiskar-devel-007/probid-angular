import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
 import{CookieService} from 'ngx-cookie-service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {
 public blogList: any;

    /************** lib list setup start here *************/
    public blogListConfig:any = {
      apiBaseUrl: this.apiService.serverUrlDemo,
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
    constructor( public apiService: ApiService,public router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService ) { 

      this.activatedRoute.data.subscribe(resolveData => {
        this.blogListConfig.datasource = resolveData.blogCatList.res;
        this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');
        
      });
    }
  ngOnInit() {
    
    
  }

}
