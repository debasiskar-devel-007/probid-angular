import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  public logo: any = '../../assets/images/logo.png';
  public loginRouteingUrl: any = { 
    "path":"login",
    "buttonName":"login",
    "customLink":"",
    "customURl":""
  };
  public signUpRouteingUrl: any = { 
    "path":"",
    "buttonName":"sign-up",
    "customLink":"/sign-up",
    "customURl":""
  };
  public buttonName: any = 'Update Password';
  // public signUpRouteingUrl: any = 'sign-up';
  public formTitle: any = 'Forget Password';
  public serverUrl:any = 'http://166.62.39.137:5050/';
  public addEndpoint: any = {
    endpoint:'forgetpassword'
  };
  public domanUrl: any = 'http://localhost:4200/reset-password';
  constructor(private readonly meta: MetaService) {
    
    this.meta.setTitle('Forget Password dynamic');
    this.meta.setTag('og:description', 'This is dynamic decription ');
    this.meta.setTag('og:title', 'This is dynamic title with meta og ');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://upload.wikimedia.org/wikipedia/commons/f/f8/superraton.jpg');

 }

  ngOnInit() {
  }
  

}
