import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import * as moment from 'moment';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public savedUrl: any = [];
  public savedId: any = [];
  public blogList: any;
  public indexval:any = 3;

  public ConfigData: any = [
    { type: 'facebook', link: 'https://SoureshBanerjee.com' },
    { type: 'twitter', link: 'https://google.com' },
    { type: 'linkedin', link: 'https://jasonwatmore.com' },
    { type: 'tumbler', link:'material.angular.io' }
  ];


  safeSrc: SafeResourceUrl;
  public videos = ['https://www.youtube.com/embed/TOzJRrGdMCs', 'https://www.youtube.com/embed/0a-TwOCLqII', 'https://www.youtube.com/embed/TOzJRrGdMCs', 'https://www.youtube.com/embed/1AmZy4bSleY', 'https://www.youtube.com/embed/fQVf9Ruauko?list=RDfQVf9Ruauko', 'https://www.youtube.com/embed/1AmZy4bSleY', 'https://www.youtube.com/embed/fQVf9Ruauko?list=RDfQVf9Ruauko'];
  private currentSlide = 0;
  constructor(public sanitizer: DomSanitizer, public activatedRoute: ActivatedRoute, public apiService: ApiService) {


    for (const i of this.videos) {
      var re = "https://www.youtube.com/embed/";
      // var str: any = "https://www.youtube.com/embed/TOzJRrGdMCs";
      var str: any = i;
      var newstr = str.replace(re, "");
      this.videos = newstr;
      this.savedId.push(newstr);
      // console.log(this.savedId)
    }


    this.safeSrc = this.videos;
    for (let i in this.safeSrc) {
      this.savedUrl.push(this.sanitizer.bypassSecurityTrustResourceUrl(this.safeSrc[i]));

    }

    console.log(this.safeSrc);


  }


  prev() {
    if (this.currentSlide === this.savedUrl.length) return;
    this.currentSlide = (this.currentSlide - 1) % this.savedUrl.length;

    console.log(this.currentSlide)
  }
  next() {
    if (this.currentSlide === this.savedUrl.length) return;
    this.currentSlide = (this.currentSlide + 1) % this.savedUrl.length;
    console.log(this.currentSlide)
  }

  showMoreFunc(){
    this.indexval = this.indexval + 3;   
    console.log(this.indexval);
  }



  ngOnInit() {

    let data: any = {};
    data = {
      source:"blogs_view_1",
      endpoint: "datalist"
    }
    this.apiService.getDatalist(data).subscribe((res)=>{
       let result: any = {};
       result = res;
       this.blogList = result.res;
       console.warn(this.blogList);
      //  let date = this.blogList[0].created_at;
      //  data = moment().format('l')
      //  console.log(data)
    })

    // data = (moment().format('l')
    
    // var slides = document.querySelectorAll('#custom_slider_by_subrata .subrata');
    // var currentSlide = 0;
    // var slideInterval = setInterval(nextSlide, 3000);

    // var next: HTMLElement = document.querySelectorAll('#next')[0] as HTMLElement;
    // var previous: HTMLElement = document.querySelectorAll('#previous')[0] as HTMLElement;


    // next.onclick = function () {

    //   nextSlide();
    // };
    // previous.onclick = function () {

    //   previousSlide();
    // };

    // function nextSlide() {
    //   goToSlide(currentSlide + 1);
    // }

    // function previousSlide() {
    //   goToSlide(currentSlide - 1);
    // }

    // function goToSlide(n) {
    //   slides[currentSlide].className = 'subrata';
    //   currentSlide = (n + slides.length) % slides.length;
    //   slides[currentSlide].className = 'subrata showing';
    // }


    // get youtube video id

    // // function youtube_parser(url) {
    // var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    // //   var match = url.match(regExp);
    // //   return (match && match[7].length == 11) ? match[7] : false;
    // // }


    // var regex = new RegExp(/(?:\?v=)([^&]+)(?:\&)*/);
    // var url = "http://www.youtube.com/watch?v=kJ9g_-p3dLA";
    // var matches = regex.exec(url);
    // var down = document.querySelector('#GFG_DOWN');

    // var videoId = matches[1];
    // down.innerHTML = "ID = " + videoId;




  }



  public video1: any = '';
  public temp: any = '';



  onSelect(video) {
    console.log(video)

    this.video1 = "https://www.youtube.com/embed/" + video;
      this.safeSrc = this.video1;

      this.temp = this.safeSrc;
    console.log(this.temp)
  }

}






// public configAddEdit: any = {
//   action: "add",
//   endpoint: this.apiService.serverUrlDemo +"/addorupdatedata",
//   endpoint2: this.apiService.serverUrlDemo,
//   source: "blog_category",
//   condition: {},
//   defaultData: null,
//   jwtToken: this.cookieService.get('jwtToken'),
//   callBack: "blog-category/list",
//   userData: { id: "18801017007", name: "Admin" },
//   defaultDataAlways: null
// }
// constructor(public activatedRoute: ActivatedRoute , private cookieService : CookieService, public apiService: ApiService) { }

// ngOnInit() {
//   this.activatedRoute.params.subscribe(params => {
//     if (params._id) {
//       this.activatedRoute.data.subscribe(resolveData => {         
//         this.configAddEdit.defaultData = resolveData.blogCatList.res[0];          
//         this.configAddEdit.action = "edit";
//         this.configAddEdit.condition = { id: params._id };
//       });
//     }
//   });
 
// }


// }
