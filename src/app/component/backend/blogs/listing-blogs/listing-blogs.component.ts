import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listing-blogs',
  templateUrl: './listing-blogs.component.html',
  styleUrls: ['./listing-blogs.component.css']
})
export class ListingBlogsComponent implements OnInit {

  // public blogListConfig:any;

    //Blogs Lib List
    // public blogListConfig: any = {
    //   apiBaseUrl: this.apiService.serverUrlDemo,
    //   listEndPoint: "datalist",
    //   datasource: [],
    //   tableName: "blogs",
    //   updateurl: "addorupdatedata",
    //   editUrl: "blogs/edit",
    //   jwtToken: this.cookieService.get('jwtToken'),
    //   deleteEndPoint: "deletesingledata",
    //   addLink: "blogs/add",
    //   view: "blogs_view"
    // }


    // ===============================Declarations=========================
  blogListConfig: any = [];
  blogListConfig_skip: any = ["_id","description_html","description","created_at","inventory_image",'image', "credentials", "profile_picture", "tags", "metatitle", "metadesc" ];
 detail_skip_array:any=["_id"]
 blogListConfig_modify_header: any = {"brand name":"Brand Name",
"parent category":"Parent Category","priority":"Priority","status":"Status"};
 tableName: any = 'blogs';
 UpdateEndpoint: any = "addorupdatedata";
 deleteEndpoint: any = "deletesingledata";
 searchingEndpoint: any = "datalist";
 editUrl: any = 'blogs/edit';
 apiUrl: any = this.apiService.serverUrlDemo;
 status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
 view:any="blogs_view";
 
 // ====================================================================

constructor(private cookieService: CookieService,public apiService: ApiService, private activatedRoute: ActivatedRoute) {
      // let data: any = {
      //   source:"blogs_view",
      //   endpoint: "datalist"

      // }
      // this.apiService.getDatalist(data).subscribe((result: any)=>{
      //   //console.log("================",result.res);
      //   this.blogListConfig= result.res;
      //   console.log('>>',this.blogListConfig)
      // });
     }

  ngOnInit() {

    this.activatedRoute.data.forEach((res)=>{
      this.blogListConfig=res.blogList.res;
      console.log('>>>>',this.blogListConfig)
    })

// ,
    
//     resolve: { blogsList: ResolveService },
//     data: {
//       requestcondition: {
//         source: 'blogs_view',
//         condition: {}
//       },
//       endpoint: 'datalist'
//     },
    
    // this.activatedRoute.data.subscribe(resolveData => {
    //   this.blogListConfig.datasource = resolveData.blogsList.res;
    //   this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');
    //   console.log(resolveData.blogsList.res);
    // });
  }

}
