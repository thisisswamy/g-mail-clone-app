import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/common/service/data.service';
import { endPoints, productionEndPoints } from '../../End points/endpoints';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  passwordPattern:string="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  constructor(
    private readonly fb:FormBuilder
    ,private readonly router:Router,
    private readonly dataService:DataService,
    private readonly http:HttpClient) { }

  ngOnInit(): void {
  }

  signUpForm=this.fb.group({
    firstName:['',
      [
        Validators.required
      ]
    ],
    lastName:['',
      [
        Validators.required
      ]
    ],
    emailId:['',
      [
        Validators.required,
        Validators.email
      ]
    ],
    password:['',
      [
        Validators.required,
        Validators.pattern(this.passwordPattern)
      ]
    ],
    confirmPassword:['',
      [
        Validators.required
      ]
    ],
  },
  );
  onSubmit(){
    if(this.signUpForm.valid){
      this.dataService.isUserLoggedIn.next(true)
      this.userRegistration(this.signUpForm.value);
      this.router.navigate(['inbox'])
    }
    this.validationsOnSubmit(this.signUpForm)
    return false
  }
  userRegistration(body: any) {
    console.log("user : ",body);
    new Promise<void>((resolve,reject)=>{
      this.http.post(productionEndPoints.userRegistration,body).subscribe(data=>{
        console.log(data);
      },
      err=>{
        console.log(err);
        
      }),
      resolve()
    })
  }
  validationsOnSubmit(form:any){
    let keys=Object.keys(form.controls)
    keys.filter(data=>{
      let control=this.signUpForm.controls[data];
      if(control.errors!==null){
        control.markAllAsTouched()
      }

    })
  }

}


