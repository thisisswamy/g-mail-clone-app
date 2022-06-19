import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/common/service/data.service';

@Component({
  selector: 'app-mail-details',
  templateUrl: './mail-details.component.html',
  styleUrls: ['./mail-details.component.scss']
})
export class MailDetailsComponent implements OnInit {
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
