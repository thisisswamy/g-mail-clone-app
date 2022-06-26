import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../common/service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private readonly fb:FormBuilder,private readonly router:Router
    ,private readonly dataService:DataService
    ) { }

  ngOnInit(): void {
    if(this.dataService.isUserLoggedIn.value){
      this.router.navigate(['inbox'])
      alert('please logout')

    }
  }
  loginForm=this.fb.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]],
  })
  onSubmit(){
    if(this.loginForm.valid){
      this.dataService.isUserLoggedIn.next(true)
      this.router.navigate(['inbox'])

    }
    this.validationsOnSubmit(this.loginForm)
    return false;
  }
  createAccount(){
    console.log('go sign up');
    this.router.navigate(['user/signup'])

  }
  validationsOnSubmit(form:any){
    let keys=Object.keys(form.controls)
    keys.filter(data=>{
      let control=this.loginForm.controls[data];
      if(control.errors!==null){
        control.markAllAsTouched()
      }

    })
  }

}
