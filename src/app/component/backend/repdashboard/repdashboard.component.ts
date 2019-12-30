import { Component, OnInit, ViewChild ,Inject} from '@angular/core';
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
  
public user_full_name: any = '';


public rsvp_list: any = '';
public saveSearch_list: any = '';
public ststus: number;

 
public saveSearchIndex:any=5;


public errorMsg: string = '';
  public stateList: any;
  public inventory_search_list: any;
  public make_list: any;
  public type_list: any;
  public model_list: any;
  public year_list: any;
  public type: string = '';
  public year: string = '';
  public make: string = '';
  public model: string = '';
  public vin: string = '';
  public trim: string = '';
  public vehicle: string = '';
  public state: string = '';
  public zip: string = '';
  public search: any;
  public user_details:any;
  public user_id: string = '';
  public modalImg: string = '';
  public isFavorite: number = 0;
  public customerList: any = '';
  public customur_id: any = '';
  public crsvplist:any ='';
  public count:any ='';

  
  constructor(public cookieService: CookieService, public activatedRoute: ActivatedRoute, public apiService: ApiService, public http: HttpClient, public dialog: MatDialog,public snack:MatSnackBar,public router:Router) {
    if (this.cookieService.get('user_details') != undefined && this.cookieService.get('user_details') != null && this.cookieService.get('user_details') != '') {
      this.userCookies = JSON.parse(this.cookieService.get('user_details'));
      // console.log(this.userCookies);
      this.userid = this.userCookies._id;
      // console.log('>>>>',this.userid)   
      }
   }

  ngOnInit() {
    this.activatedRoute.data.forEach((data:any) => {
      // this.crsvplist = data.fordashboard.result.save_search;
      // console.log('dash-data',data)

      this.saveSearch_list = data.rsvp.result.save_search;

      // console.log('dvfdgfhg', this.saveSearch_list)
    })
  }

/* To copy Text from Textbox */
copyInputMessage(inputElement){
  inputElement.select();
  document.execCommand('copy');
  inputElement.setSelectionRange(0, 0);
}

}


