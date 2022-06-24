import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private readonly dataService:DataService) { }

  ngOnInit(): void {
  }
  openMenu(){
    if(this.dataService.isMenuOpen.value){
      this.dataService.isMenuOpen.next(false);
    }
    else{
      this.dataService.isMenuOpen.next(true)
    }
  }
}
