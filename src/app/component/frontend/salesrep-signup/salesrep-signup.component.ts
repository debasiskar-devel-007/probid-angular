import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { ApiService } from '../../../api.service';
import { MetaService } from '@ngx-meta/core';
@Component({
  selector: 'app-salesrep-signup',
  templateUrl: './salesrep-signup.component.html',
  styleUrls: ['./salesrep-signup.component.css']
})
export class SalesrepSignupComponent implements OnInit {

  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
  public salesSignUpForm: FormGroup;
  public stateList: any;
  public cityList: any;
  public timezone: any;
  public term_msg: any;
  constructor(public apiservice: ApiService, public fb: FormBuilder,private readonly meta: MetaService) {

    this.meta.setTitle('ProBid Auto - Sales Rep SignUp');
    this.meta.setTag('og:description', 'Sales Reps can Sign Up to create their account with the ProBid Auto Back-office and make massive commissions by helping customers locate and buy the best Pre-Owned vehicles of their desires.');
    this.meta.setTag('twitter:description', 'Sales Reps can Sign Up to create their account with the ProBid Auto Back-office and make massive commissions by helping customers locate and buy the best Pre-Owned vehicles of their desires.');    
    this.meta.setTag('og:keyword', 'ProBid Auto Sales Rep SignUp, Sign Up With ProBid Auto, Join ProBid Auto');
    this.meta.setTag('twitter:keyword', 'ProBid Auto Sales Rep SignUp, Sign Up With ProBid Auto, Join ProBid Auto');
    this.meta.setTag('og:title', 'ProBid Auto - Sales Rep SignUp');
    this.meta.setTag('twitter:title', 'ProBid Auto - Sales Rep SignUp');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logomain.png');
    this.meta.setTag('twitter:image', '../../assets/images/logomain.png');




    /**genarate Sales Ref-signUp form */
    this.salesSignUpForm = this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      phone: [null, Validators.required],
      zip: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      address: [null, Validators.required],
      password: [null, Validators.required],
      conpass: [null, Validators.required],
      username: [null, Validators.required],
      companyname: [null, Validators.required],
      webiner: [null],
      timezone: [null],
      check: [false, Validators.required],
      type: ["salesrep"],
      status:1
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

  getTimezone() {
    this.apiservice.getJsonObject('assets/data/timezone.json').subscribe((res) => {
      let result: any = {};
      result = res;
      this.timezone = result;
    })
  }

  /**Sales Ref Submit function */
  salesSignUpFormSubmit() {
    for (let x in this.salesSignUpForm.controls) {
      this.salesSignUpForm.controls[x].markAsTouched();
    }


    if (this.salesSignUpForm.valid) {
      /**Checkbox check */
      if (this.salesSignUpForm.value.check == true) {

        if (this.salesSignUpForm.value.conpass != null) {
          delete this.salesSignUpForm.value.conpass;
          delete this.salesSignUpForm.value.check;
        }
        /**Api service for insert form */
        var data = { "source": "user", "data": this.salesSignUpForm.value }
        this.apiservice.CustomRequest(data, 'addorupdatedata').subscribe((data: any) => {
          console.log(data);
          if (data.status == 'success') {
           // console.log('success');
            this.formDirective.resetForm();
          } else {
            console.log('Opps');
          }
        })
        // console.log(this.salesSignUpForm.value);
      }
      else {
        this.term_msg = 'Please accept terms';
      }
    }

  }

  /**blur function */
  inputUntouched(val: any) {
    this.salesSignUpForm.controls[val].markAsUntouched();
  }

  gotoenroll() {
    document.querySelector('.signupformdiv').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  
}
