import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

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
  public indexval:any = 6;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.activatedRoute.data.forEach(data=>{
    //   let result:any;
    //   result=data.serviceListData.res;
    //   this.ServiceListArray=result;
    //   // console.log("ojjjjjjjjhgdfhgdf",this.ServiceListArray);       
    //  this.indexvallength = this.ServiceListArray.length;    
    // })
  }

  btnBackClick= function () {
    this.router.navigateByUrl('service');
  };

  showMoreFunc(){
    this.indexval = this.indexval + 3;   
    console.log(this.indexval);
  }

}
