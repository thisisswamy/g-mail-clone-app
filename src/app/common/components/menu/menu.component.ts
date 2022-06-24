import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isMenuOpen!:boolean;
  constructor(private readonly dataService:DataService) { }

  ngOnInit():void {
    this.dataService.isMenuOpen.subscribe(data=>{
      this.isMenuOpen=data;
    })
  }
  composeMail(){
    this.dataService.isOpenComposeMail.next(true)
  }

}
