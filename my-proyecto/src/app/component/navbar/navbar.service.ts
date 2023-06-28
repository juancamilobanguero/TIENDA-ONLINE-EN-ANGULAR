import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
private tokenExisten$:Subject<boolean>;
  constructor() { 
    this.tokenExisten$=new Subject()
  }
  traertoken(){
    const token = localStorage.getItem('token') 
    return !!token
  }
 confirmarToken():Observable<boolean>{
   return this.tokenExisten$.asObservable()
 }
 removeToken() {
  localStorage.removeItem('token');
  this.tokenExisten$.next(false);
 }
}
