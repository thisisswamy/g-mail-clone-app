import { Component, Input, OnInit } from '@angular/core';
import { DataConstants } from '../../service/data-constants';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';
import { ApplicationService } from '../../service/application-service';
import { HttpClient } from '@angular/common/http';
import { endPoints, productionEndPoints } from '../../../End points/endpoints';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  isChecked!:boolean;
  hasReadOptions!:boolean;
  hasMarkAsReadOptions!:boolean;
  isEnableCheckBox!:boolean;
  isDeleteClicked!:boolean;
  readOptionsList:string[]=DataConstants.readOptionsList;
  markAsReadOptionsList:string[]=DataConstants.markAsReadOptionsList;

  @Input()
  folderName:any;
  constructor(
    private readonly dataService:DataService,
    private readonly router:Router,
    private readonly http:HttpClient
    
    
    ) { }

  ngOnInit(): void {
    this.dataService.enableCheckBox.subscribe(data=>{
      this.isEnableCheckBox=data;
    })
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
  goBack(){
    this.dataService.enableCheckBox.next(false);
    this.router.navigate([this.folderName])
  }
  cancel(){
    this.isDeleteClicked=false;

  }
  delete(){
    this.isDeleteClicked=false;
    const mail=ApplicationService.get('mail')
    return new Promise<void>((resolve,reject)=>{
      this.http.delete(productionEndPoints.deleteMails+this.folderName+"/"+mail.id).subscribe(data=>{
        console.log("delete: ",data);
        this.router.navigate([this.folderName])
        this.dataService.enableCheckBox.next(false);

        resolve();
      },
      err=>{
        console.log(err);
      });
    })
    
  }
  toDelete(){
    this.isDeleteClicked=this.isDeleteClicked?false:true;

  }

}
