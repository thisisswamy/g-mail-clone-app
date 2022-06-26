import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import { ApplicationService } from '../../service/application-service';

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
    private readonly dataService:DataService
    
    ) { }

  ngOnInit(): void {
    this.dataService.enableCheckBox.next(false);
    console.log(this.inbox);
    

  }
  starredMsg(){
    if(this.isStarred){
      this.isStarred=false;
    }
    else{
      this.isStarred=true;
    }

  }
  gotoMail(inbox:any){
    this.dataService.enableCheckBox.next(true);
    ApplicationService.set("mail",inbox);
    this.router.navigate(['inbox/mail-details'], { state: { prevPage: this.router.url } })
  }










  // onHover(){  
  //   this.isMouseHover=true;
  //   console.log('hover');
    
 
  // }
  // hoverOut(){
  //   this.isMouseHover=false;
  //   console.log('hover out');
  // }

}
