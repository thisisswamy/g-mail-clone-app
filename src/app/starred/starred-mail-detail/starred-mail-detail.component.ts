import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/common/service/data.service';

@Component({
  selector: 'app-starred-mail-detail',
  templateUrl: './starred-mail-detail.component.html',
  styleUrls: ['./starred-mail-detail.component.scss']
})
export class StarredMailDetailComponent implements OnInit {

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
