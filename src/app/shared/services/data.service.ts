import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient ) { }

  // apiUrl= 'http://sahosoftweb.com/api/Category/GetAll'
  apiUrl='https://pbrsmart.com/api/users/main-banner';
  subBanner='https://pbrsmart.com/api/users/main-category-products';


  getproductdata(){
    return this. http.get<any[]>(this.apiUrl);

  } getsubbanner(){
    return this. http.get<any[]>(this.subBanner);

  }
  
}
