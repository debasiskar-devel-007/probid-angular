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
 public blogcategorysearch:any;
 public blogcategory:any;
  public blogcategorycount:any;
  public blog:any = '';

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
      this.blogdetail();
    }


    blogdetail(){
      
      let url:any={};
      url=this.activatedRoute.snapshot.params.id;
      console.log(url)
      console.log( this.activatedRoute.snapshot.params.id)

      var data: any = {};
    data = {
      source:"blogs_view",
      endpoint: "datalist",
      condition:{
      _id: this.activatedRoute.snapshot.params.id
    },
  }
    this.apiService.getTempToken().subscribe((res:any)=>{
      
      if(res.status == 'success') {
        this.apiService.getDatalistWithToken(data, res).subscribe((res:any)=>{

          this.blog = res.res[0];
          console.log('..........>>>>>>>>>>>>>',this.blog)

        });
      }
    });

      
    }

  ngOnInit() {
    

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
             console.log(this.blogcategorysearch)
   
           });
         }
       })
      }
       panelOpenState = false;
  
 
     

    

}
