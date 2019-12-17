import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.css']
})
export class MaindashboardComponent implements OnInit {
public userCookies: any;
public user_full_name: any = '';

socialAdvLists: Users[];

  constructor(public cookieService: CookieService) {
    

    this.socialAdvLists = [{ Id: '1001', title_name: 'Anil SIngh', site: 'http://www.code-sample.com' },
    { Id: '1002', title_name: 'Alok', site: 'http://www.code-view.com' },
    { Id: '1003', title_name: 'Reena', site: 'http://www.code-sample.xyz' },
    { Id: '1004', title_name: 'Dilip', site: 'http://www.codefari.com' },
    ];

    // console.log(this.cookieService.getAll());
    // this.userCookies = JSON.parse(this.cookieService.get('user_details'));

    // console.log(this.userCookies.firstname);
    // this.user_full_name = this.userCookies.firstname +' '+this.userCookies.lastname;
    // console.log(this.user_full_name);

    
   }

  ngOnInit() {
  }

}

export class Users {
  Id: String;
  title_name: String;
  site: String;
}