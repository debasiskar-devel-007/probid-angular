import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistfrontendComponent implements OnInit {

  //Blogs Lib List
  public blogListConfig: any = {
    apiBaseUrl: this.apiService.serverUrlDemo,
    listEndPoint: "datalist",
    datasource: "",
    tableName: "blogs",
    updateurl: "addorupdatedata",
    editUrl: "blog-management/edit",
    jwtToken: this.cookieService.get('jwtToken'),
    deleteEndPoint: "deletesingledata",
    addLink: "/blog-management/add",
    view: "blogs"

  }
  public blogList: any;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService, public apiService: ApiService) {

  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((resolveData: any) => {
      console.log(resolveData.blogCatList);
      this.blogList = resolveData.blogCatList.res;
      this.blogListConfig.datasource = this.blogList;
      this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');

    });
  }

}



