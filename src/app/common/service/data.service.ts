import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  enableCheckBox=new BehaviorSubject<boolean>(false);
  isMinimised=new BehaviorSubject<boolean>(false);
  isOpenComposeMail=new BehaviorSubject<boolean>(false);
  isUserLoggedIn=new BehaviorSubject<boolean>(false);
  isMenuOpen=new BehaviorSubject<boolean>(false);
  isMailSent=new BehaviorSubject<boolean>(false);
  isSearchFilter=new BehaviorSubject<string>("");
  constructor() { }

}
