import { Component, OnInit ,Inject} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
 import{CookieService} from 'ngx-cookie-service';
import { ApiService } from 'src/app/api.service';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from "@angular/material";
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

export interface DialogData {
  data: any;
  
} 

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
  public blogcat:any;
  public blogsubcat:any;
  public blogList:any;
  public blog_img:any
  public blog_image:any;
  public videourl:any='';
  public url:"https://www.youtube.com/embed/"
  // btn_hide:any=false;
  safeSrc: SafeResourceUrl;



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
    constructor( public apiService: ApiService,public router: Router, private activatedRoute: ActivatedRoute, private cookieService: CookieService,private sanitizer: DomSanitizer,public dialog:MatDialog ) { 
      this.blogdetail();
    }



// ************* blog details *****************//
    blogdetail(){
      
  //     let url:any={};
  //     url=this.activatedRoute.snapshot.params.id;
  //     console.log(url)
  //     console.log( this.activatedRoute.snapshot.params.id)

  //     var data: any = {};
  //   data = {
  //     source:"blogs_view",
  //     endpoint: "datalist",
  //     condition:{
  //     _id: this.activatedRoute.snapshot.params.id
  //   },
  // }
  //   this.apiService.getTempToken().subscribe((res:any)=>{
      
  //     if(res.status == 'success') {
  //       this.apiService.getDatalistWithToken(data, res).subscribe((res:any)=>{

  //         this.blog = res.res[0];
  //         console.log('..........>>>>>>>>>>>>>',this.blog)

  //       });
  //     }
  //   });
  this.activatedRoute.data.forEach((data: any) =>{
    console.log("ts data",data);
    this.blog = data.blogCatList.res;
     console.log('+++++++++++++++++>>>>>>>>>>>>>>',this.blog)
     this.blog_img=this.blog[0].blogs_image[0].basepath+this.blog[0].blogs_image[0].image;
   
     console.log(this.blog_img)

      
    })
  }



  ngOnInit() {

    
  
     /**api service for blog_catagory by uttam */
    //  var datacat:any={};
    //  datacat={
    //    source:"blog_category",
    //    endpoint: "datalist"
    //  }
    //  this.apiService.getTempToken().subscribe((res:any)=>{
       
    //    if(res.status == 'success') {
    //      this.apiService.getDatalistWithToken(datacat, res).subscribe((res2:any)=>{
 
    //        this.blogcategory = res2.res;
    //        console.log('++++++++++++++++++++',this.blogcategory)
 
    //      });
    //    }
     
    //  });
 


     /**api service for blog_catagory count by uttam */
    //  var datacatcount:any={};
    //  datacatcount={
    //    source:"blog_category",
    //    endpoint: "datalist"
    //  }
    //  this.apiService.getTempToken().subscribe((resc:any)=>{
       
    //    if(resc.status == 'success') {
    //      this.apiService.getDatalistWithToken(datacatcount, resc).subscribe((res2:any)=>{
 
    //        this.blogcategorycount = res2.resc;
    //        console.log(this.blogcategorycount)
 
    //      });
    //    }
     
    //  });
 
 

 
     /**api service for sub blog_catagory by uttam */
    //  var datacatsearch:any={};
    //  datacatsearch={
    //    source:"blogs_view",
    //    endpoint: "datalist",
      
    //  }
    //    this.apiService.getTempToken().subscribe((res:any)=>{
    //      if(res.status == 'success') {
    //        this.apiService.getDatalistWithToken(datacatsearch, res).subscribe((res2:any)=>{
   
    //          this.blogcategorysearch = res2.res;
    //          console.log(this.blogcategorysearch)
   
    //        });
    //      }
    //    })
    //   }
      //  panelOpenState = false;

      //  subblog(val:any){
      //    console.log('>>>>>>>>>>>')
      //    console.log(val);
      //    this.blogsubcat=val._id;
      //    console.log(this.blogsubcat)
       
      //   let data:any;
      //   data = {
      //     source:"blogs_view",
      //     endpoint: "datalist",
      //     condition:{
      //     _id: val._id
      //   },
      // }
      //   this.apiService.getTempToken().subscribe((res:any)=>{
          
      //     if(res.status == 'success') {
      //       this.apiService.getDatalistWithToken(data, res).subscribe((res:any)=>{
    
      //         this.blog = res.res[0];
      //         console.log('..........>>>>>>>>>>>>>',this.blog)
    
      //       });
      //     }
      //   });


      //  }
  

    
  }

  openvideourl(val: any){
    console.log(val)
    let url:any;
     url="https://www.youtube.com/embed/";
      console.log('video url....>',url+val);
      this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(url + val);
      
      console.log('>>>>>>>>>>>>>>>>>>',this.safeSrc)
      const dialogRef = this.dialog.open(VideoModalComponent, {
        // panelClass:['modal-md','success-modal'],
       
        width:'450px',
        data:this.safeSrc,
      
        
  
      });
  
      dialogRef.afterClosed().subscribe(result => {
        
      });

  }
}


@Component({
  selector:'app-videomodal',
  templateUrl:'./videomodal.html'
})
export class VideoModalComponent {
  constructor( public dialogRef: MatDialogRef<VideoModalComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData){

  }
}

