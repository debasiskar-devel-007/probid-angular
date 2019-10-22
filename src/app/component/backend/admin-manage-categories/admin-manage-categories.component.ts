import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-admin-manage-categories',
  templateUrl: './admin-manage-categories.component.html',
  styleUrls: ['./admin-manage-categories.component.css']
})
export class AdminManageCategoriesComponent implements OnInit {

  constructor(public router: Router, public dialog: MatDialog) {


   }

   modalopen() {
    const dialogRef = this.dialog.open(DialogModalOpenDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit() {
  }

}


@Component({
  selector: 'admin-add-categories',
  template: `<app-admin-add-categories></app-admin-add-categories>`,
})
export class DialogModalOpenDialog {}