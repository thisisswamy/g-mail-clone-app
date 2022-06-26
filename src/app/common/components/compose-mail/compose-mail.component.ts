import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { endPoints } from '../../../End points/endpoints';

@Component({
  selector: 'app-compose-mail',
  templateUrl: './compose-mail.component.html',
  styleUrls: ['./compose-mail.component.scss']
})
export class ComposeMailComponent implements OnInit {

  hasCc!:boolean;
  hasBcc!:boolean
  isMinimised!:boolean;
  constructor(private readonly dataService:DataService,
    private readonly fb:FormBuilder,
    private readonly http:HttpClient,
    private readonly datePipe:DatePipe) { }
 

  ngOnInit(): void {
    this.dataService.isMinimised.subscribe(data=>{
      this.isMinimised=data;
    })
  }
  composeMail=this.fb.group({
    mailTo:['',[Validators.required]],
    subject:['',[Validators.required]],
    mailBody:['',[Validators.required]],
  })
  addBcc(){
    this.hasBcc = this.hasBcc ? false : true

  }
  addCc(){
    this.hasCc = this.hasCc ? false : true

  }
  getMaximiseWindow(){
    this.dataService.isMinimised.next(true)

  }
  getMinimiseWindow(){
    this.dataService.isMinimised.next(false)

  }
  close(){
    this.dataService.isOpenComposeMail.next(false)
    this.dataService.isMinimised.next(false)

  }
  shutterDown(){
    this.dataService.isOpenComposeMail.next(false)
    this.dataService.isMinimised.next(false)
    
    
  }
  onSubmit(){
    if(this.composeMail.valid){
      const body:any=this.getBody(this.composeMail.value);

      new Promise<void>((resolve,reject)=>{
        this.http.post(endPoints.sendMails,body).subscribe(data=>{
          
        },
        err=>{
          console.log(err);
          
        })
        resolve()
      })
      this.dataService.isOpenComposeMail.next(false)
      this.dataService.isMinimised.next(false)

    }


  }
  getBody(first:any){
    const date=this.datePipe.transform(new Date(),"MMM d, y, h:mm:ss a");  
    const addValues:any={
      mailFrom:"t@gmail.com",
      dateAndTime:date
    }
    const body:any={...first, ...addValues};
    return body;
  }
 
}
