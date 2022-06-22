import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  constructor(private readonly fb:FormBuilder,   private readonly router:Router ) { }

  ngOnInit(): void {
  }
  passwordForm=this.fb.group({
    email:['',[Validators.required]]
  })
  onSubmit(){
    if(this.passwordForm.valid){
      this.router.navigate(['user/login'])

    }
    return false;
  }

}
