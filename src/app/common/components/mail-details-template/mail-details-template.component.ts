import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import { ApplicationService } from '../../service/application-service';

@Component({
  selector: 'app-mail-details-template',
  templateUrl: './mail-details-template.component.html',
  styleUrls: ['./mail-details-template.component.scss']
})
export class MailDetailsTemplateComponent implements OnInit {

  isStarred!:boolean;
  isMoreOptionsClicked!:boolean;
  mailDetails:any;
  constructor(private readonly router:Router,private readonly dataService:DataService) { }

  ngOnInit(): void {
    const previousUrl = history.state.prevPage ?? null;
    if (!previousUrl) {
      this.router.navigate(['inbox'])
    } 
    this.getMailDetails()
  }
  starredMethod(){
    if(this.isStarred){
      this.isStarred=false;
    }else{
      this.isStarred=true;
    }

  }
  getMoreOptions(){
      if(this.isMoreOptionsClicked){
        this.isMoreOptionsClicked=false;
      }else{
        this.isMoreOptionsClicked=true
      }
  }
  forward(){ 
    this.isMoreOptionsClicked=false;


  }
  reply(){
    this.isMoreOptionsClicked=false;


  }
  getMailDetails(){
    this.mailDetails=ApplicationService.get("mail")
  }

}
