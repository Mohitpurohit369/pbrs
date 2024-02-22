import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient ) { }

  // apiUrl= 'http://sahosoftweb.com/api/Category/GetAll'
  // apiUrl='https://pbrsmart.com/api/users/main-banner';
  // subBanner='https://pbrsmart.com/api/users/main-category-products';

  apiUrl= '/assets/home_banner.json';
 
  getproductdata(){
    return this. http.get<any[]>(this.apiUrl);

  }
  //  getsubbanner(){
  //   return this. http.get<any[]>(this.subBanner);

  // }
  post(url: string, model: any): Observable<any> {
      const body = JSON.stringify(model);
  
      let httpHeaders = new HttpHeaders()
        .set('Content-Type', 'application/json')
  
      return this.http.post(url, body, {
        headers: httpHeaders
      });
    }
  
}
