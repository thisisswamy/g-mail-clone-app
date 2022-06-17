import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-compose-mail',
  templateUrl: './compose-mail.component.html',
  styleUrls: ['./compose-mail.component.scss']
})
export class ComposeMailComponent implements OnInit {

  hasCc!:boolean;
  hasBcc!:boolean
  isMinimised!:boolean;
  constructor(private readonly dataService:DataService) { }
 

  ngOnInit(): void {
    this.dataService.isMinimised.subscribe(data=>{
      this.isMinimised=data;
    })
  }
  addBcc(){
    this.hasBcc = this.hasBcc ? false : true

  }
  addCc(){
    this.hasCc = this.hasCc ? false : true

  }
  getMaximiseWindow(){
    this.dataService.isMinimised.next(true)

  }
  getMinimiseWindow(){
    this.dataService.isMinimised.next(false)

  }
  close(){
    this.dataService.isOpenComposeMail.next(false)
    this.dataService.isMinimised.next(false)

  }
  shutterDown(){
    this.dataService.isOpenComposeMail.next(false)
    this.dataService.isMinimised.next(false)
    
    
  }
 
}
