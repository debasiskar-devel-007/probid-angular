import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-categories',
  templateUrl: './admin-add-categories.component.html',
  styleUrls: ['./admin-add-categories.component.css']
})
export class AdminAddCategoriesComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
