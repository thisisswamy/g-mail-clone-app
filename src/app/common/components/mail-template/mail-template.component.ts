import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import { ApplicationService } from '../../service/application-service';
import { HttpClient } from '@angular/common/http';
import { endPoints } from '../../../End points/endpoints';

@Component({
  selector: 'app-mail-template',
  templateUrl: './mail-template.component.html',
  styleUrls: ['./mail-template.component.scss']
})
export class MailTemplateComponent implements OnInit {

  isStarred!:boolean;  
  isMouseHover!:boolean; 
  @Input()
  inbox:any;
  constructor(
    private readonly router:Router,
    private readonly dataService:DataService,
    private readonly http:HttpClient
    
    ) { }

  ngOnInit(): void {
    this.dataService.enableCheckBox.next(false);
    console.log(this.inbox);
    

  }
  starredMsg(){
   this.isStarred=this.isStarred?false:true;
   const mail=ApplicationService.get("mail")
   return new Promise<void>((resolve,reject)=>{
    this.http.put(`${endPoints.inboxStarredMails}${mail.id}`,null).subscribe(data=>{
      console.log(data); 
      resolve()
    },
    err=>{
      console.log(err);
      
    })
    
   })

  }
  gotoMail(inbox:any){
    this.dataService.enableCheckBox.next(true);
    ApplicationService.set("mail",inbox);
    this.router.navigate(['inbox/mail-details'], { state: { prevPage: this.router.url } })
  }










}
