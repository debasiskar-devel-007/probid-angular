import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-repdashboard',
  templateUrl: './repdashboard.component.html',
  styleUrls: ['./repdashboard.component.css']
})
export class RepdashboardComponent implements OnInit {
  public userCookies: any;
  public userid: any = '';
  
  constructor( public cookieService: CookieService  ) {
    if (this.cookieService.get('user_details') != undefined && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != '') {
      this.userCookies = JSON.parse(this.cookieService.get('user_details'));
      console.log(this.userCookies);
      this.userid = this.userCookies._id;
      console.log('>>>>',this.userid)   
      }
   }

  ngOnInit() {
  }

/* To copy Text from Textbox */
copyInputMessage(inputElement){
  inputElement.select();
  document.execCommand('copy');
  inputElement.setSelectionRange(0, 0);
}

}
