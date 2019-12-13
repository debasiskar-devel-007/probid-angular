import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-rsvplists',
  templateUrl: './rsvplists.component.html',
  styleUrls: ['./rsvplists.component.css']
})
export class RsvplistsComponent implements OnInit {
public rsvp_list: any = '';
public ststus: number;
  constructor(public activatedRoute: ActivatedRoute, public apiService: ApiService) { }

  ngOnInit() {
    this.activatedRoute.data.forEach((data:any) => {
      console.log(data)
      this.rsvp_list = data.rsvp.res;
    })
  }
  changeStatus(item: any, val: any) {
    console.log('rsvpSend status',item, val)
    let endpoint: any = "addorupdatedata";
    item.status = val;
    let card_data:any = {
      card_data: item,
      id:item._id
    }
    let data: any = {
      data: card_data,
      source: "send_for_rsvp",
    };
      this.apiService.CustomRequest(data, endpoint).subscribe((res:any) => {
        console.log(res);
        (res.status == "success");
        this.getdata();
      });
  }
  
  getdata() {
    let data: any = {
      endpoint: 'datalist',
      source: 'send_rsvp_view',
      // condition: {
      //   "id":  this.user_id
      // }
    }
    this.apiService.getDatalist(data).subscribe((res:any)=>{
      this.rsvp_list = res.res;
      console.log(this.rsvp_list);
    });
  }

}
