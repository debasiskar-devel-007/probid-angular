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
  public indexval:any = 13;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.data.forEach((data:any)=>{
      console.log(data)

      this.ServiceListArray=data.serviceListData.res;     
     this.indexvallength = this.ServiceListArray.length;
    })
  }

  btnBackClick= function () {
    this.router.navigateByUrl('service');
  };
  

  showMoreFunc(){
    this.indexval = this.indexval + 3;   
    console.log(this.indexval);
  }

}
