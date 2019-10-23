import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-admin-categories',
  templateUrl: './add-admin-categories.component.html',
  styleUrls: ['./add-admin-categories.component.css']
})
export class AddAdminCategoriesComponent implements OnInit {
  public addyearform: FormGroup;
  public addType: FormGroup;
  public addMakeform: FormGroup;
  public addModelform: FormGroup;

  public allData: any = {};
  constructor(public route: ActivatedRoute, public apiService: ApiService, public fb: FormBuilder) {



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


    let id = route.snapshot.params.id;

    let data: any = {};

    data = { "source": 'manage-categories', condition: { "_id": id } };

    this.apiService.getDatalistForResolve(data).subscribe(res => {
      // console.log(res);
let result: any = {};
      result = res;
       
      this.allData = result.res[0];
      console.log(this.allData);
      console.log(this.allData.categoriesType);
if (this.allData.categoriesType == 'type') {

  this.addType = this.fb.group({
    id: [result._id],
    TypeName: [result.TypeName, Validators.required],
    added_on: [result.added_on, Validators.required],
    Cars: [result.Cars, Validators.required],
    status: [result.status],
    categoriesType: [result.categoriesType]
  })
} else if(this.allData.categoriesType == 'make') {
  this.addMakeform = this.fb.group({
    id: [result._id],
    make_name: [result.make_name, Validators.required],
    added_on: [result.added_on, Validators.required],
    Cars: [result.Cars, Validators.required],
    status: [result.status],
    categoriesType: [result.categoriesType]
  })
}else if(this.allData.categoriesType == 'model') {
  this.addModelform = this.fb.group({
    id: [result._id],
    model_name: [result.model_name, Validators.required],
    added_on: [result.added_on, Validators.required],
    make_name: [result.make_name, Validators.required],
    Cars: [result.Cars, Validators.required],
    status: [result.status],
    categoriesType: [result.categoriesType]
  })
}else if (this.allData.categoriesType == 'year') {
  this.addyearform = this.fb.group({
    id: [result._id],
    added_on: [result.added_on, Validators.required],
    year: [result.year, Validators.required],
    Cars: [result.Cars, Validators.required],
    status: [result.status],
    categoriesType: [result.categoriesType]
  })
}

      
    });

  }

  ngOnInit() {
    console.log('this.allData');
    console.log(this.allData);
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
    })
  }
  addyearSubmit() {
    console.log(this.addyearform.value);
    let endpoint: any = "addorupdatedata";
    let data: any = {
      data: this.addyearform.value,
      source: "manage-categories",
    };
    this.apiService.CustomRequest(data, endpoint).subscribe(res =>{
      console.log(res);
    })
  }
}
