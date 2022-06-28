import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/common/service/data.service';
import { productionEndPoints } from 'src/app/End points/endpoints';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.scss']
})
export class SentMailComponent implements OnInit {

  isMinimise!:boolean;
  isComposeMailOpened!:boolean;
  sentList:any;

  constructor(private readonly dataService:DataService,
    private readonly http:HttpClient) { }

  ngOnInit(): void {
    this.dataService.isMinimised.subscribe((data: boolean)=>{
      this.isMinimise=data;
    })
    this.dataService.isOpenComposeMail.subscribe((data: boolean)=>{
      this.isComposeMailOpened=data
    })
    this.getAllSentMails()

  }
  getAllSentMails(){
   return  new Promise<void>((resolve,rejects)=>{
      this.http.get(productionEndPoints.allSentMails+"t@gmail.com").subscribe(data=>{
        this.sentList=data;
        this.sentList.reverse();
        resolve()
      },
      err=>{
        console.log(err);
        
      })
      
    })
  }

}
