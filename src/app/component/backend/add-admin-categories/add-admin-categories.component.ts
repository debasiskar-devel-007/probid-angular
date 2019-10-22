import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-admin-categories',
  templateUrl: './add-admin-categories.component.html',
  styleUrls: ['./add-admin-categories.component.css']
})
export class AddAdminCategoriesComponent implements OnInit {

  constructor(public route: ActivatedRoute) {
    console.log(route.snapshot.params.id);
   }

  ngOnInit() {
  }

}
