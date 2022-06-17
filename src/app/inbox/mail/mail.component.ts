import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/common/service/data.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  isMinimise!:boolean;
  isComposeMailOpened!:boolean;
  constructor(private readonly dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.isMinimised.subscribe(data=>{
      this.isMinimise=data;
    })
    this.dataService.isOpenComposeMail.subscribe(data=>{
      this.isComposeMailOpened=data
    })

  }

}
