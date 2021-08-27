import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public url: string = 'https://gorest.co.in/public-api/users?_format=json&accesstoken=NELh_j5bLUT72rLc3gpW5X7Jg9Opj4awzce1';
  public jsonUrl: string = 'assets/data.json';

  constructor(private _http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this._http.get(this.url);
  }

  public getJson(): Observable<any> {
    return this._http.get(this.jsonUrl);
  }

  public isLoggedIn(): boolean {
    return !!window.localStorage.getItem('token');
  }
}
