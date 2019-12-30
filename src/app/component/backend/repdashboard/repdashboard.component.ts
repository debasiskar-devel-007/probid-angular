import { Component, OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute ,Router} from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-repdashboard',
  templateUrl: './repdashboard.component.html',
  styleUrls: ['./repdashboard.component.css']
})
export class RepdashboardComponent implements OnInit {
  public userCookies: any;
  public userid: any = '';

  public datalist: any = '';
  public saveSearchIndex:any=5;

  
  constructor(public cookieService: CookieService, public activatedRoute: ActivatedRoute, public apiService: ApiService, public dialog: MatDialog,public snack:MatSnackBar,public router:Router) {
    if (this.cookieService.get('user_details') != undefined && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != '') {
      this.userCookies = JSON.parse(this.cookieService.get('user_details'));
      this.userid = this.userCookies._id; 
      }
   }

  ngOnInit() {
    this.activatedRoute.data.forEach((data:any) => {
      console.log('dash-data',data)

      this.datalist = data.rsvp.result;
    })
  }

  /* To copy Text from Textbox */
  copyInputMessage(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

}


