import { Component, OnInit } from '@angular/core';
import { DataService } from '../../common/service/data.service';
import { HttpClient } from '@angular/common/http';
import { endPoints, productionEndPoints } from '../../End points/endpoints';
import { ApplicationService } from '../../common/service/application-service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  isMinimise!:boolean;
  isComposeMailOpened!:boolean;
  inboxList:any;
  loader!:boolean;

  constructor(private readonly dataService:DataService,
    private readonly http:HttpClient) { }

  ngOnInit(): void {
    this.loader=true
    this.dataService.isMinimised.subscribe(data=>{
      this.isMinimise=data;
    })
    this.dataService.isOpenComposeMail.subscribe(data=>{
      this.isComposeMailOpened=data
    })
    this.getAllInboxMails()

  }
  getAllInboxMails(){
   return  new Promise<void>((resolve,rejects)=>{
      this.http.get(productionEndPoints.allInboxMails+"t@gmail.com").subscribe(data=>{
        this.inboxList=data;
        this.inboxList.reverse();
        this.loader=false;
        
      },
      err=>{
        console.log(err);
        
      })
      resolve()
    })
  }

}
