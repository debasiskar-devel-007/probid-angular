import { Component, OnInit, HostListener } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  windowScrolled: boolean;

  constructor(public router: Router, public route: ActivatedRoute, public dialog: MatDialog) {
    // console.log(router.url);
    
   }

   termscondition() {
    const dialogRef = this.dialog.open(DialogTermsDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  privacypolicy() {
    const dialogRef = this.dialog.open(DialogPrivacyDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

   @HostListener("window:scroll", [])

   onWindowScroll() {
       if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
           this.windowScrolled = true;
       }
       else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
           this.windowScrolled = false;
       }
   }

   scrollToTop() {
    (function smoothscroll() {

        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 8));
        }

    })();
}

  ngOnInit() {
    this.router.events.subscribe(() =>
          window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
          })
      );
  }

}


@Component({
    selector: 'terms-dialog',
    templateUrl: 'terms-dialog.html',
  })
  export class DialogTermsDialog {}


  
@Component({
    selector: 'privacy-dialog',
    templateUrl: 'privacy-dialog.html',
  })
  export class DialogPrivacyDialog {}