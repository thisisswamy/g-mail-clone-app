import { Component, OnInit } from '@angular/core';
import { DataService } from '../../common/service/data.service';

@Component({
  selector: 'app-sent-mail-detail',
  templateUrl: './sent-mail-detail.component.html',
  styleUrls: ['./sent-mail-detail.component.scss']
})
export class SentMailDetailComponent implements OnInit {

  isComposeMailOpened!:boolean;
  isMinimise!: boolean;
  constructor(private readonly dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.isOpenComposeMail.subscribe(data=>{
      this.isComposeMailOpened=data;
      
    })
    this.dataService.isMinimised.subscribe(data=>{
      this.isMinimise=data;
    })
  }

}
