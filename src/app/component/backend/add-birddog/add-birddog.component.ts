import { Component, OnInit, ViewChildren, ViewChild,Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-birddog',
  templateUrl: './add-birddog.component.html',
  styleUrls: ['./add-birddog.component.css']
})
export class AddBirddogComponent implements OnInit {
public salesref_list:any;
public addcustomerForm: FormGroup;
public stateList: any;
public cityList: any;
@ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
constructor(public activatedRouter:ActivatedRoute, public apiservice: ApiService, public fb: FormBuilder,public dialog: MatDialog) { 
    /**genarate Add-birddog form */
    this.addcustomerForm = this.fb.group({
      id:null,
      email: [null, Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      phone: [null, Validators.compose([Validators.required, Validators.pattern(/^0|[1-9]\d*$/)])],
      zip: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      address: [null, Validators.required],
      password: [null, Validators.required],
      conpass: [null, Validators.required],
      type: ["birddog"],
      status:1
    }, {
      validator: this.machpassword('password', 'conpass')
    });

    this.getStateList();
    this.getCityList();
}

  ngOnInit() {
    this.activatedRouter.data.forEach(data=>{   
      console.log(data.salesreflist.res);
      // this.salesref_list=data.salesreflist.res;
    })
  }
  
 /**Miss Match password check function */
 machpassword(passwordkye: string, confirmpasswordkye: string) {
  return (group: FormGroup) => {
    let passwordInput = group.controls[passwordkye],
      confirmpasswordInput = group.controls[confirmpasswordkye];
    if (passwordInput.value !== confirmpasswordInput.value) {
      return confirmpasswordInput.setErrors({ notEquivalent: true });
    }
    else {
      return confirmpasswordInput.setErrors(null);
    }
  };
}
getStateList() {
  this.apiservice.getJsonObject('assets/data/states.json').subscribe(response => {
    let result: any = {};
    result = response;
    this.stateList = result;
  })
}
getCityList() {
  this.apiservice.getJsonObject('assets/data/usa-cities.json').subscribe((res) => {
    let result: any = {};
    result = res;
    this.cityList = result;
  })
}
}
