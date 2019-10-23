import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatDialogRef } from '@angular/material';
import { DialogModalOpenDialog } from '../admin-manage-categories/admin-manage-categories.component';

@Component({
  selector: 'app-admin-add-categories',
  templateUrl: './admin-add-categories.component.html',
  styleUrls: ['./admin-add-categories.component.css']
})
export class AdminAddCategoriesComponent implements OnInit {

  public addyearform: FormGroup;
  public addType: FormGroup;
  public addMakeform: FormGroup;
  public addModelform: FormGroup;
  public allData: any = {};
  public makeArray: any;
  constructor(public route: ActivatedRoute, public apiService: ApiService, public fb: FormBuilder, public router: Router, public dialogRef: MatDialogRef<DialogModalOpenDialog>) {


    let id = route.snapshot.params.id;

    let data: any = {};

    data = { "source": 'manage-categories', condition: { "_id": id } };

    this.apiService.getDatalistForResolve(data).subscribe(res => {
      // console.log(res);
let result: any = {};
      result = res;
       console.log(result.res[0]);
      this.allData = result.res[0];
    });



    this.addType = this.fb.group({
     
      TypeName: ['', Validators.required],
      added_on: ['', Validators.required],
      Cars: ['', Validators.required],
      status: [''],
      categoriesType: ["type"]
    })

    this.addMakeform = this.fb.group({
     
      make_name: ['', Validators.required],
      added_on: ['', Validators.required],
      Cars: ['', Validators.required],
      status: [''],
      categoriesType: ["make"]
    })

    this.addModelform = this.fb.group({
      
      model_name: ['', Validators.required],
      added_on: ['', Validators.required],
      make_name: ['', Validators.required],
      Cars: ['', Validators.required],
      status: [null],
      categoriesType: ["model"]
    })

    this.addyearform = this.fb.group({
     
      added_on: ['', Validators.required],
      year: ['', Validators.required],
      Cars: ['', Validators.required],
      status: [null],
      categoriesType: ["year"]
    })

  }

  ngOnInit() {
    let data: any = {};
   
    data = { "source": 'manage-categories', condition: { "categoriesType": "make" } };

    this.apiService.getDatalistForResolve(data).subscribe(res => {
      
let result: any = {};
      result = res;
      this.makeArray = result.res;
      console.log(this.makeArray);
    })
    
  }

   
  addTypeSubmit() {
    console.log(this.addType.value);
    let endpoint: any = "addorupdatedata";
    let data: any = {
      data: this.addType.value,
      source: "manage-categories",
    };
    this.apiService.CustomRequest(data, endpoint).subscribe(res =>{
      console.log(res);
      this.dialogRef.close();
    })
  }
  addMakeSubmit() {
    console.log(this.addMakeform.value);
    let endpoint: any = "addorupdatedata";
    let data: any = {
      data: this.addMakeform.value,
      source: "manage-categories",
    };
    this.apiService.CustomRequest(data, endpoint).subscribe(res =>{
      console.log(res);
      this.dialogRef.close();
    })
  }
  addModelSubmit() {
    console.log(this.addModelform.value);
    let endpoint: any = "addorupdatedata";
    let data: any = {
      data: this.addModelform.value,
      source: "manage-categories",
    };
    this.apiService.CustomRequest(data, endpoint).subscribe(res =>{
      console.log(res);
      this.dialogRef.close();
    })
  }
  addYearSubmit() {
    console.log(this.addyearform.value);
    let endpoint: any = "addorupdatedata";
    let data: any = {
      data: this.addyearform.value,
      source: "manage-categories",
    };
    this.apiService.CustomRequest(data, endpoint).subscribe(res =>{
      console.log(res);
      this.dialogRef.close();
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
