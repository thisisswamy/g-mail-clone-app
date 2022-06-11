import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  isChecked!:boolean;
  constructor() { }

  ngOnInit(): void {
  }
  checked(){
    if(this.isChecked){
      this.isChecked=false;
    }
    else{
      this.isChecked=true;
    }
  }
}
