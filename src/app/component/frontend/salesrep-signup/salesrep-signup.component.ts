import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-salesrep-signup',
  templateUrl: './salesrep-signup.component.html',
  styleUrls: ['./salesrep-signup.component.css']
})
export class SalesrepSignupComponent implements OnInit {
  public salesSignUpForm: FormGroup;
  public stateList:any;
  public cityList:any;
  public timezone:any;
  constructor(public apiservice:ApiService,public fb: FormBuilder) {
       /**genarate Sales Ref-signUp form */
       this.salesSignUpForm = this.fb.group({
        email: [null, Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
        firstname: [null, Validators.required],
        lastname: [null, Validators.required],
        phone: [null, Validators.required],
        zip: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
        address: [null,Validators.required],
        password:[null,Validators.required],
        conpass:[null,Validators.required],
        username:[null,Validators.required],
        companyname:[null,Validators.required],
        webiner:[null],
        timezone:[null],
        type:["salesref"],
      }, {
        validator: this.machpassword('password', 'conpass')
      });
  
      this.getStateList();
      this.getCityList();
      this.getTimezone();
   }

  ngOnInit() {
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
getStateList (){
  this.apiservice.getJsonObject('assets/data/states.json').subscribe(response=>{
    let result:any = {};
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

getTimezone() {
  this.apiservice.getJsonObject('assets/data/timezone.json').subscribe((res) => {
    let result: any = {};
    result = res;
    this.timezone = result;
  })
}

/**Sales Ref Submit function */
salesSignUpFormSubmit(){
  for (let x in this.salesSignUpForm.controls) {
    this.salesSignUpForm.controls[x].markAsTouched();
  }

  if(this.salesSignUpForm.valid){

    if(this.salesSignUpForm.value.conpass!=null){
      delete this.salesSignUpForm.value.conpass;
    }
     /**Api service for insert form */
    //  var data={"source":"user","data":this.salesSignUpForm.value}
    //  this.apiservice.CustomRequest(data,'addorupdatedata' ).subscribe((data) => {     
    //    console.log(data);
    //  })
    console.log(this.salesSignUpForm.value);
  }

}

inputUntouched(val: any) {
  this.salesSignUpForm.controls[val].markAsUntouched();
}

}
