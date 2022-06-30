import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/common/service/data.service';
import { productionEndPoints } from 'src/app/End points/endpoints';

@Component({
  selector: 'app-starred-mail',
  templateUrl: './starred-mail.component.html',
  styleUrls: ['./starred-mail.component.scss']
})
export class StarredMailComponent implements OnInit {

  isMinimise!:boolean;
  isComposeMailOpened!:boolean;
  starredList:any;
  loader!:boolean;

  constructor(private readonly dataService:DataService,
    private readonly http:HttpClient) { }

  ngOnInit(): void {
    this.loader=true;
    this.dataService.isMinimised.subscribe(data=>{
      this.isMinimise=data;
    })
    this.dataService.isOpenComposeMail.subscribe(data=>{
      this.isComposeMailOpened=data
    })
    this.getAllStarredMails()

  }
  getAllStarredMails(){
   return  new Promise<void>((resolve,rejects)=>{
      this.http.get(productionEndPoints.allStarredMails+"t@gmail.com").subscribe(data=>{
        this.starredList=data;
        this.starredList.reverse();
        this.loader=false;
      },
      err=>{
        console.log(err);
        
      })
      resolve()
    })
  }


}
