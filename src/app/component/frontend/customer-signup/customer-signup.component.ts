import { Component, OnInit, ViewChildren, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent implements OnInit {
  @ViewChild(FormGroupDirective) formDirective:FormGroupDirective;
  public customerSignUpForm: FormGroup;
  public stateList:any;
  public cityList:any;
  constructor(public apiservice:ApiService,public fb: FormBuilder) {
    /**genarate customer-signUp form */
    this.customerSignUpForm = this.fb.group({
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
      type:["customer"],
    }, {
      validator: this.machpassword('password', 'conpass')
    });

    this.getStateList();
    this.getCityList();
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

  /**Submit function */
  customerSignUpFormSubmit(){
   
    for (let x in this.customerSignUpForm.controls) {
      this.customerSignUpForm.controls[x].markAsTouched();
    }
    if(this.customerSignUpForm.valid){

      if(this.customerSignUpForm.value.conpass!=null){
        delete this.customerSignUpForm.value.conpass;
      }
      /**Api service for insert form */
      var data={"source":"user","data":this.customerSignUpForm.value}
      this.apiservice.CustomRequest(data,'addorupdatedata' ).subscribe((data: any) => {
              if (data.status == 'success') {
                this.formDirective.resetForm();
              }
        console.log(data);
      
        
      })
    }
  }


  inputUntouched(val: any) {
    this.customerSignUpForm.controls[val].markAsUntouched();
  }
}
