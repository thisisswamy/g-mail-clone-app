import { Component, OnInit } from '@angular/core';
import { DataConstants } from '../../service/data-constants';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  isChecked!:boolean;
  hasReadOptions!:boolean;
  hasMarkAsReadOptions!:boolean;
  readOptionsList:string[]=DataConstants.readOptionsList;
  markAsReadOptionsList:string[]=DataConstants.markAsReadOptionsList;
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
  getReadOptions(){
    if(this.hasReadOptions){
      this.hasReadOptions=false;
    }
    else{
      this.hasReadOptions=true
      this.hasMarkAsReadOptions=false

    }

  }
  selectReadOption(option:string){
    console.log(option);
    this.hasReadOptions=false;
    
  }
  getMarkAsReadOptions(){
    if(this.hasMarkAsReadOptions){
      this.hasMarkAsReadOptions=false
    }
    else{
      this.hasMarkAsReadOptions=true;
      this.hasReadOptions=false;

    }
  }
  selectMarkAsReadOption(readOption:string){
    console.log(readOption);
    this.hasMarkAsReadOptions=false;
    

  }

}
