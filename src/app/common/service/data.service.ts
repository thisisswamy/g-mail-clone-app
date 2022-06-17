import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  enableCheckBox=new BehaviorSubject<boolean>(false);
  isMinimised=new BehaviorSubject<boolean>(false);
  isOpenComposeMail=new BehaviorSubject<boolean>(false);
  constructor() { }
}
