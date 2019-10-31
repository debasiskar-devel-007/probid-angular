import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-listing-blogs',
  templateUrl: './listing-blogs.component.html',
  styleUrls: ['./listing-blogs.component.css']
})
export class ListingBlogsComponent implements OnInit {

    //Blogs Lib List
    public blogListConfig: any = {
      apiBaseUrl: this.apiService.serverUrlDemo,
      listEndPoint: "datalist",
      datasource: "",
      tableName: "blogs",
      updateurl: "addorupdatedata",
      editUrl: "manage-websites/addblogs/edit",
      jwtToken: "",
      deleteEndPoint: "deletesingledata",
      addLink: "/blogs/list",
      view: "blogs_view"
  
    }

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private cookieService: CookieService,public apiService: ApiService) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolveData => {
      this.blogListConfig.datasource = resolveData.blogsList.res;
      this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');
    });
  }

}
