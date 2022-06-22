import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/common/service/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private readonly fb:FormBuilder
    ,private readonly router:Router,
    private readonly dataService:DataService) { }

  ngOnInit(): void {
  }
  signUpForm=this.fb.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    email:['',[Validators.required]],
    password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]],
  })
  onSubmit(){
    if(this.signUpForm.valid){
      this.dataService.isUserLoggedIn.next(true)
      this.router.navigate(['inbox'])
    }
    return false
  }

}
