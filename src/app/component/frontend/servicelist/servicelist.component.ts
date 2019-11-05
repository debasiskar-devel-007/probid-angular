import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-servicelist',
  templateUrl: './servicelist.component.html',
  styleUrls: ['./servicelist.component.css']
})
export class ServicelistComponent implements OnInit {

  private indexvallength:any;
  public ServiceListArray:any=[];
  // showMore = false;
  showme=true;
  public indexval:any = 13;
  public serv_list:any = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router,public apiService: ApiService) { }

  ngOnInit() {
    var data: any = {};
    data = {
      source:"service",
      endpoint: "datalist"
    }
    // this.activatedRoute.data.forEach((data:any)=>{
    //   console.log(data)

    //   this.ServiceListArray=data.serviceListData.res;     
    //  this.indexvallength = this.ServiceListArray.length;
    // })

    /**sourav */
    this.apiService.getTempToken().subscribe((res:any)=>{
      
      if(res.status == 'success') {
        this.apiService.getDatalistWithToken(data, res).subscribe((res2:any)=>{
         //console.log(res2);
         this.ServiceListArray=res2.res;     
         this.indexvallength = res2.length;
         console.log(this.ServiceListArray)
         if(this.serv_list==''){
           this.serv_list=this.ServiceListArray[8];
         }

        });
      }

    });
   


 

  }

  btnBackClick= function () {
    this.router.navigateByUrl('service');
  };
  

  showMoreFunc(){
    this.indexval = this.indexval + 3;   
    console.log(this.indexval);
  }
//service list data display
  servicelist(val: any){
  // console.log(val)
  this.serv_list=val;
  console.log(this.serv_list)
  
  }

}
