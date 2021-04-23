import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from './userdef';

const helper = new JwtHelperService();
 
@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post<any>('https://ancient-anchorage-93435.herokuapp.com/api/login', user);
  }
}
