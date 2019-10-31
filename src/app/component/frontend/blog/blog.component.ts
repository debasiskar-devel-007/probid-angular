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
      source:"blogs_view",
      endpoint: "datalist"
    }
    this.apiService.getDatalist(data).subscribe((res)=>{
       let result: any = {};
       result = res;
       this.blogList = result.res;
       console.warn(this.blogList);
    })

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



