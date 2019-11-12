import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/api.service';
import { IfStmt } from '@angular/compiler';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from "@angular/material";
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

export interface DialogData {
  data: any;
  
} 

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
  public blogsubcategorycount:any;
  public count:any=0;
  public indexval:any=4;
  public bloglisting:any;
  public videourl:any='';
  public url:"https://www.youtube.com/embed/"
  // btn_hide:any=false;
  safeSrc: SafeResourceUrl;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService, public apiService: ApiService,public dialog:MatDialog, private sanitizer: DomSanitizer) {

  }

  panelOpenState = false;

//***********blog list view in blog detail************//
  blogdetail(val:any){
    console.log(val)
    this.router.navigateByUrl('/blogdetail/' +val)
  }
  

  ngOnInit() {
    this.activatedRoute.data.forEach((data: any) => {
      this.blogList = data;
       console.log('>>>>>>>>>>>>>>',this.blogList)

    })
    //   this.blogListConfig.datasource = this.blogList;
    //   this.blogListConfig.jwtToken = this.cookieService.get('jwtToken');

    // // // });
    // var data: any = {};
    
    // data = {
    //   source:"blogs_view",
    //   endpoint: "datalist"
    // }
    // this.apiService.getTempToken().subscribe((res:any)=>{
      
    //   if(res.status == 'success') {
    //     this.apiService.getDatalistWithToken(data, res).subscribe((res2:any)=>{

          this.bloglisting = this.blogList.blogCatList.blogs
          console.log('---------------',this.bloglisting)
          
          // this.videourl=this.blogList.blogCatList.blogs[3].credentials[0].video_url;
          
          // if(this.videourl != ''){
           
          
            
            // return this.videourl;
          // }


    //     });
    //   }
    // });




    /**api service for blog_catagory by uttam */
    // var datacat:any={};
    // datacat={
    //   source:"blog_category",
    //   endpoint: "datalist"
    // }
    // this.apiService.getTempToken().subscribe((res:any)=>{
    //   if(res.status == 'success') {
    //     this.apiService.getDatalistWithToken(datacat, res).subscribe((res2:any)=>{

          this.blogcategory =this.blogList.blogCatList.blog_category;
          console.log('++++++++++++++++++',this.blogcategory)

    //     });
    //   }
    
    // });




    /**api service for blog_catagory count by uttam */
    // var datacatcount:any={};
    // datacatcount={
    //   source:"blog_category",
    //   endpoint: "datalist"
    // }
    // this.apiService.getTempToken().subscribe((resc:any)=>{
      
    //   if(resc.status == 'success') {
    //     this.apiService.getDatalistWithToken(datacatcount, resc).subscribe((res2:any)=>{

          this.blogcategorycount = this.blogList.blogCatList.blog_category.length;
          console.log('>>>>>>>>>>>>>>>>>',this.blogcategorycount)

    //     });
    //   }
    
    // });
   



    /**api service for sub blog_catagory by uttam */
    // var datacatsearch:any={};
    // datacatsearch={
    //   source:"blogs_view",
    //   endpoint: "datalist",
     
    // }
    //   this.apiService.getTempToken().subscribe((res:any)=>{
    //     if(res.status == 'success') {
    //       this.apiService.getDatalistWithToken(datacatsearch, res).subscribe((res2:any)=>{
  
    //         this.blogcategorysearch = res2.res;
    //         console.log('this.blogcategorysearch')
    //         console.log(this.blogcategorysearch)
  
    //       });
    //     }
    //   })




      //*********blog sub category count***********//
    //   var datasubcatcount:any={};
    //   datasubcatcount={
    //   source:"blogs_view",
    //   endpoint: "datalist",
     
    // }
    // this.apiService.getTempToken().subscribe((resc:any)=>{
      
    //   if(resc.status == 'success') {
    //     this.apiService.getDatalistWithToken(datasubcatcount, resc).subscribe((res:any)=>{

          
          
    //         this.blogsubcategorycount = res.resc;
          
    //       console.log('++++++++=======++++++++',this.blogsubcategorycount)

    //     });
    //   }
    
    // });

      
    }
    openvideourl(val:any){

     let url:any;
     url="https://www.youtube.com/embed/";
      console.log('video url....>',url+val);
      this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(url + val);
      
      console.log(this.safeSrc)
      const dialogRef = this.dialog.open(CommonVideoModalComponent, {
        // panelClass:['modal-md','success-modal'],
       
        width:'450px',
        data:this.safeSrc,
        
        
       
        
  
      });
  
      dialogRef.afterClosed().subscribe(result => {
        
      });
    }




//*********** sub blog list view in blog detail************//
    blog(val:any){
      this.blogcat = val._id;
      this.router.navigateByUrl('/blogdetail/'+val._id)
    }



//***********load more blog *************//
    blogloadmore(){
      // console.log('load more')
      this.indexval=this.indexval+2;
      // console.log('>>>>>>>>>',this.indexval);
      // console.log("+++++++++++++++++++++",this.blogList.length);
      // if(this.indexval==this.blogList.length)
      // this.btn_hide=true;

      // console.log(this.btn_hide);
     
      
    }
}


@Component({
  selector:'app-commonvideomodal',
  templateUrl:'./commonvideomodal.html'
})
export class CommonVideoModalComponent {
  constructor( public dialogRef: MatDialogRef<CommonVideoModalComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData){

  }
}

