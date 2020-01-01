import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookService, LoginResponse, UIParams, UIResponse } from 'ngx-facebook';

@Component({
  selector: 'app-social-advo',
  templateUrl: './social-advo.component.html',
  styleUrls: ['./social-advo.component.css']
})
export class SocialAdvoComponent implements OnInit {

  public profile: any = '';
  constructor(public router: Router, private fb: FacebookService) {
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
    var fullUrl = 'https://dev.probidauto.com/assets/images/'+url
 
    let params: UIParams = {
      href: fullUrl,
      method: 'share'
    };
   
    this.fb.ui(params)
      .then((res: UIResponse) => console.log(res))
      .catch((e: any) => console.error(e));
   
  }


  private handleError(error) {
    console.error('Error processing action', error);
  }
}
