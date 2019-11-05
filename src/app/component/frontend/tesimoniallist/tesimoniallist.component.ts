import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment'; // add this 1 of 4

@Component({
  selector: 'app-tesimoniallist',
  templateUrl: './tesimoniallist.component.html',
  styleUrls: ['./tesimoniallist.component.css']
})
export class TesimoniallistComponent implements OnInit {
  private indexvallength: any;
  public TestimonialListArray: any = [];
  // showMore = false;
  showme = true;
  public indexval: any = 6;
  public dataformate: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.dataformate = moment(); // add this 2 of 4
    // console.log(this.dataformate)
   }


  ngOnInit() {
    this.activatedRoute.data.forEach(data => {
      let result: any = {};
      result = data.testimonialListData.res;
      console.warn(result)
      this.TestimonialListArray = result;
      this.indexvallength = this.TestimonialListArray.length;
      console.log(this.indexvallength);
    })
  }

  btnBackClick = function () {
    this.router.navigateByUrl('testimonial');
  };

  showMoreFunc() {
    this.indexval = this.indexval + 3;
    console.log(this.indexval);
  }
  
  showmore() {
    
  }


}


