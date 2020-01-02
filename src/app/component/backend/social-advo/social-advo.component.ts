import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookService, LoginResponse, UIParams, UIResponse } from 'ngx-facebook';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-social-advo',
  templateUrl: './social-advo.component.html',
  styleUrls: ['./social-advo.component.css']
})
export class SocialAdvoComponent implements OnInit {
  public userCookies: any;
  public profile: any = '';
  constructor(public router: Router, private fb: FacebookService, public cookieService: CookieService) {

    this.userCookies = JSON.parse(this.cookieService.get('user_details'));
    fb.init({
      appId: '2540470256228526',
      version: 'v2.9'
    });
   }



  ngOnInit() {
    this.getLoginStatus();
  }

  login() {
    this.fb.login()
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
        this.getProfile();
      })
      .catch(this.handleError);
  }
  
    getLoginStatus() {
    this.fb.getLoginStatus()
      .then((res: any)=>{
        console.log(res);
        this.getProfile();
      })
      .catch(console.error.bind(console));
  }

  getProfile() {
    this.fb.api('me/?fields=id,name,email,picture')
      .then((res: any) => {
        console.log('Got the users friends', res);
        this.profile = res;
        
      })
      .catch((error: any) => console.error(error));
  }
    /**
   * Get the users friends
   */
  // getFriends() {
  //   this.fb.api('/me/friends')
  //     .then((res: any) => {
  //       console.log('Got the users friends', res);
  //     })
  //     .catch(this.handleError);
  // }
  
  logoutWithFacebook(): void {

    this.fb.logout().then(() => console.log('Logged out!'));
  }

  share(url: string) {
    var fullUrl = 'https://dev.probidauto.com/customer-signup/'+url+'/'+this.userCookies._id;
    this.cookieService.set('shareIngUrl',fullUrl);
    console.log(fullUrl)
 
    let params: UIParams = {
      href: fullUrl,
      method: 'share',
      quote: 'https://dev.probidauto.com/'
    };
   
    this.fb.ui(params)
      .then((res: UIResponse) => console.log(res))
      .catch((e: any) => console.error(e));
   
  }


  private handleError(error) {
    console.error('Error processing action', error);
  }
}
