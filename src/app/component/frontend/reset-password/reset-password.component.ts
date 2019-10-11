import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public logo: any = '../../assets/images/logo.png';
  public fromTitleName: any = 'Reset Password';
  // public serverUrl: any = 'https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/';
  public serverUrl: any = this.apiService.serverUrlDemo;
  public addEndpoint: any = {
    endpoint:'addorupdatedata',
    source:'usermanagement'
  };
  
  constructor(private readonly meta: MetaService, public apiService: ApiService) {
    
    this.meta.setTitle('Reset Password dynamic');
    this.meta.setTag('og:description', 'This is dynamic description');
    this.meta.setTag('og:title', 'This is dynamic title with meta og ');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://upload.wikimedia.org/wikipedia/commons/f/f8/superraton.jpg');

 }

  ngOnInit() {
  }

}
  
