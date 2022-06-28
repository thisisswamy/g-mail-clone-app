import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import { ApplicationService } from '../../service/application-service';
import { HttpClient } from '@angular/common/http';
import { endPoints, productionEndPoints } from '../../../End points/endpoints';

@Component({
  selector: 'app-mail-template',
  templateUrl: './mail-template.component.html',
  styleUrls: ['./mail-template.component.scss']
})
export class MailTemplateComponent implements OnInit {

  isStarred!:boolean;  
  isMouseHover!:boolean;
  searchFilter!:string; 
  @Input()
  mail:any;

  @Input()
  folderName:any;
  constructor(
    private readonly router:Router,
    private readonly dataService:DataService,
    private readonly http:HttpClient
    
    ) { }

  ngOnInit(): void {
    this.dataService.enableCheckBox.next(false);
    this.dataService.isSearchFilter.subscribe(data=>{
      this.searchFilter=data;
      console.log(this.searchFilter);
    
    })
   
    console.log(this.mail);
    

  }
  starredMsg(){
   this.isStarred=this.isStarred?false:true;
   const mail=ApplicationService.get("mail")
   return new Promise<void>((resolve,reject)=>{
    this.http.put(`${productionEndPoints.starredMails}${this.folderName}/${mail.id}`,null).subscribe(data=>{
      console.log(data); 
      resolve()
    },
    err=>{
      console.log(err);
      
    })  
   })
  }
  gotoMail(mail:any){
    this.dataService.enableCheckBox.next(true);
    ApplicationService.set("mail",mail);
    this.router.navigate([`${this.folderName}/mail-details`], { state: { prevPage: this.router.url } })
  }










}
