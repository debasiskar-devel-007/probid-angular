import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-list-view',
  templateUrl: './search-list-view.component.html',
  styleUrls: ['./search-list-view.component.css']
})
export class SearchListViewComponent implements OnInit {

  public user_data: any;

  constructor(public router: Router, public cookieService: CookieService) { 
      // this.user_data = JSON.parse(this.cookieService.get('user_details'))
    // console.log(this.user_data)
  }

  ngOnInit() {
  }

}
