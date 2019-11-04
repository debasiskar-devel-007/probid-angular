import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-tesimonial',
  templateUrl: './tesimonial.component.html',
  styleUrls: ['./tesimonial.component.css']
})
export class TesimonialComponent implements OnInit {

  carouselOptions = {
    margin: 5,
    nav: true,
    loop: true,
    navText: ["<div class='nav-btn prev-slide'><i class='material-icons'>keyboard_backspace</i></div>", "<div class='nav-btn next-slide'><i class='material-icons'>keyboard_backspace</i></div>"],
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        center: true,
        loop: true,
        nav: true,
      },
      600: {
        items: 2,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        center: true,
        loop: true,
        nav: true,
      },
      991: {
        items: 3,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        center: true,
        loop: true,
        nav: true,         
      },
      1500: {
        items: 3,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        center: true,
        loop: true,
        nav: true,
        dot:false,
      }
    }
  }

  public TestimonialListArray: any = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public apiService: ApiService) { }


  ngOnInit() {
    var data: any = {};
    data = {
      source:"testimonals",
      endpoint: "datalist"
    }
    // this.apiService.getDatalist(data).subscribe((res)=>{
    //   console.log(res);
    //       let result: any = {};
    //   result = res;
    //   this.TestimonialListArray = result.res;
    //   console.log(this.TestimonialListArray);
    // });


    // this.apiService.getDatalist(data).subscribe((res)=>{
    //   console.log(res);
    //       let result: any = {};
    //   result = res;
    //   this.TestimonialListArray = result.res;
    //   console.log(this.TestimonialListArray);
    // });

    this.apiService.getDatalistWithToken().subscribe((res:any)=>{
      if(res.status == 'success') {
        console.log('=============', res);
        this.apiService.test(data, res).subscribe((res2:any)=>{
          console.log('PPPPPPPPPPPPPPPP', res2);
          if(res2.status == 'success') {
            console.log('&&&&&&&&&&&&', res2);
            this.TestimonialListArray = res2.res;
          }
        });
      }
    });
  }

  showBut() {
    console.log('show button')
  }

  btnClick() {
    this.router.navigateByUrl('/testimonial');
  };



}
