import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';


export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 /* public showHidediv: any;
*/
  /*@Output() public sidenavToggle = new EventEmitter();*/

  public  name: string;
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  public userCookies: any;
public user_full_name: any = '';
   
  constructor(public router: Router, public cookieService: CookieService, public dialog: MatDialog, activeroute: ActivatedRoute) {
    
    // this.userCookies = JSON.parse(this.cookieService.get('user_details'));

    // console.log(this.userCookies.firstname);
    // this.user_full_name = this.userCookies.firstname +' '+this.userCookies.lastname;
    // console.log(this.user_full_name);
   }

  ngOnInit() {
  }

  logOut() {
    this.cookieService.deleteAll();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(comingSoonDialog, {
     
      data: {name: this.name}
    });

    setTimeout(() => {
      this.dialog.closeAll();
    }, 4000);
  }

 /* public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }*/



}


@Component({
  selector: 'coming',
  // templateUrl: './coming-soon.html',
  template: `
  <div class="logomodalwrapper">
  <div class="logomodal"><img src="../../assets/images/logo.png"></div>
  <h2>coming soon</h2></div>
  `
})
export class comingSoonDialog {

  constructor(
    public dialogRef: MatDialogRef<comingSoonDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}