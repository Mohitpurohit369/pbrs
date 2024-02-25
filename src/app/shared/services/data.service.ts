import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient ) { }

  // apiUrl= 'http://sahosoftweb.com/api/Category/GetAll'
  // apiUrl='https://pbrsmart.com/api/users/main-banner'; on karna hai
  //apiUrl='https://pbrsmart.com/api/users/sing-up';//
  // subBanner='https://pbrsmart.com/api/users/main-category-products';

  apiUrl= '/assets/home_banner.json';
 
  getproductdata(){
    return this. http.get<any[]>(this.apiUrl);

  }
 



  post(url:string,model:any):Observable<any> {
    const body = JSON.stringify(model);
    console.log("data save",body)
    let httpHeader = new HttpHeaders().set('Content-type','application/json')
    return this.http.post(url,body,{
      headers:httpHeader
    });
  }





    getProductIds(id:any): Observable<number[]> {
      return this.http.get<number[]>(`this.apiUrl/${id}`)
        // .pipe(
        //   map(products => products.map(product => product))
        // );
    }
  
}
