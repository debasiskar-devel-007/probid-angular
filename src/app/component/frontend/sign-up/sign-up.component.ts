import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public userType: any = 'admin';
  public logo: any = '../../assets/images/logo.png';
  public modaleLogo: any = '../../assets/images/logo.png';
  public forgetRouteingUrl: any = 'forget-password';
  public loginRouteingUrl: any = 'login';

  public formTitle: any = 'Sign Up';
  // public serverUrl: any = 'https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/';
  public serverUrl: any = this.apiService.serverUrlDemo;
  public addEndpoint: any = {
    endpoint:'addorupdatedata',
    source:'user'
  };
  constructor(private readonly meta: MetaService, public apiService: ApiService) {
    
    this.meta.setTitle('Sign Up dynamic');
    this.meta.setTag('og:description', 'This is dynamic description ');
    this.meta.setTag('og:title', 'This is dynamic title with meta og ');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://upload.wikimedia.org/wikipedia/commons/f/f8/superraton.jpg');

}

  ngOnInit() {
  }

}
