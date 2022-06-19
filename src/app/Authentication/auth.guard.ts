import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../common/service/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private dataService:DataService,private readonly router:Router){}
  canActivate(): boolean{
   if(!this.dataService.isUserLoggedIn.value){
    this.router.navigate(['user'])
    return false
   }
    return true;
  }
  
}
