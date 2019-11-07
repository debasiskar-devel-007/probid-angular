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
  public blogcategory:any;
  public blogcount:any;
  public blogcategorysearch:any;
  public blogcategorycount:any;
  public blogcat:any;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService, public apiService: ApiService) {

  }

  panelOpenState = false;

  blogdetail(val:any){
    console.log(val)
    this.router.navigateByUrl('/blogdetail/' +val)
  }

  ngOnInit() {
    // this.activatedRoute.data.subscribe((resolveData: any) => {
    //   console.log(resolveData.blogCatList);
    //   this.blogList = resolveData.blogCatList.res;
    //   this.blogListConfig.datasource = this.blogList;
    //   this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');

    // });
    var data: any = {};
    
    data = {
      source:"blogs_view",
      endpoint: "datalist"
    }
    this.apiService.getTempToken().subscribe((res:any)=>{
      
      if(res.status == 'success') {
        this.apiService.getDatalistWithToken(data, res).subscribe((res2:any)=>{

          this.blogList = res2.res;
          // console.log(this.blogList)

        });
      }
    });

    /**api service for blog_catagory by uttam */
    var datacat:any={};
    datacat={
      source:"blog_category",
      endpoint: "datalist"
    }
    this.apiService.getTempToken().subscribe((res:any)=>{
      if(res.status == 'success') {
        this.apiService.getDatalistWithToken(datacat, res).subscribe((res2:any)=>{

          this.blogcategory = res2.res;
          console.log('++++++++++++++++++++',this.blogcategory)

        });
      }
    
    });

    /**api service for blog_catagory count by uttam */
    var datacatcount:any={};
    datacatcount={
      source:"blog_category",
      endpoint: "datalist"
    }
    this.apiService.getTempToken().subscribe((resc:any)=>{
      
      if(resc.status == 'success') {
        this.apiService.getDatalistWithToken(datacatcount, resc).subscribe((res2:any)=>{

          this.blogcategorycount = res2.resc;
          console.log(this.blogcategorycount)

        });
      }
    
    });

    /**api service for sub blog_catagory by uttam */
    var datacatsearch:any={};
    datacatsearch={
      source:"blogs_view",
      endpoint: "datalist",
     
    }
      this.apiService.getTempToken().subscribe((res:any)=>{
        if(res.status == 'success') {
          this.apiService.getDatalistWithToken(datacatsearch, res).subscribe((res2:any)=>{
  
            this.blogcategorysearch = res2.res;
            console.log('this.blogcategorysearch')
            console.log(this.blogcategorysearch)
  
          });
        }
      })
    }


    blog(val:any){
      this.blogcat = val._id;
      this.router.navigateByUrl('/blogdetail/'+val._id)
    }
}

