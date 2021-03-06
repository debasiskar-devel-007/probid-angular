import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-listing-blogcat',
  templateUrl: './listing-blogcat.component.html',
  styleUrls: ['./listing-blogcat.component.css']
})
export class ListingBlogcatComponent implements OnInit {

  //Listing for blog category
  // public blogListConfig: any = {
  //   apiBaseUrl:this.apiService.serverUrlDemo,
  //   listEndPoint: "datalist",
  //   datasource:[],
  //   tableName: "blog_category",
  //   updateurl: "addorupdatedata",
  //   editUrl: "blog-category/edit/",
  //   jwtToken: "",
  //   deleteEndPoint: "deletesingledata",
  //   addLink: "blog-category/add",
  //   view: "blog_category_view"

  // }


  // ===============================Declarations=========================
    blogListConfig: any = [];
    blogListConfig_skip: any = ["_id","description_html","description","created_at","inventory_image",'image'];
 detail_skip_array:any=["_id"]
 blogListConfig_modify_header: any = {"brand name":"Brand Name",
"parent category":"Parent Category","priority":"Priority","status":"Status"};
 tableName: any = 'blog_category';
 UpdateEndpoint: any = "addorupdatedata";
 deleteEndpoint: any = "deletesingledata";
 searchingEndpoint: any = "datalist";
 editUrl: any = 'blog-category/edit/'; 
 apiUrl: any = this.apiService.serverUrlDemo;
 status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
 view:any="blog_category";
 
 // ====================================================================

  
  constructor(private activatedRoute: ActivatedRoute, private cookieService: CookieService, public apiService: ApiService) {
    // this.activatedRoute.data.subscribe(resolveData => {
    //   this.blogListConfig.datasource = resolveData.blogCatList.res;
    //   this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');
    // });
    


  }

  ngOnInit() {

    let data: any = {
      source:"blog_category",
      endpoint: "datalist"
    }
    this.apiService.getDatalist(data).subscribe((result: any)=>{
      //console.log(result.res);
      this.blogListConfig=result.res;
      // this.blogListConfig.datasource = result.res;
      // this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');
    });
  }
}
