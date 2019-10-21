import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-manage-categories',
  templateUrl: './admin-manage-categories.component.html',
  styleUrls: ['./admin-manage-categories.component.css']
})
export class AdminManageCategoriesComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
