import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogoutClicked!:boolean;
  search:string="";
  constructor(private readonly dataService:DataService,
    private readonly router:Router) { }

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
  logOut(){
    this.isLogoutClicked = this.isLogoutClicked ? false:true;

  }
  cancelLogout(){
    this.isLogoutClicked=false;
    console.log('cancel..');
    

  }
  yesLogOut(){
    this.dataService.isUserLoggedIn.next(false);
    console.log('logout...');
    
    this.router.navigate(['/user'])
  }
  searchMail(){
    this.dataService.isSearchFilter.next(this.search)
    console.log(this.search);
  }
}
