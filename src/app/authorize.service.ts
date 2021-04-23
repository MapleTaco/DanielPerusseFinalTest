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

  public getToken(): string {
    return localStorage.getItem('access_token');
  }

  public readToken(): any {
    const token = localStorage.getItem('access_token');
    return helper.decodeToken(token);
  }

  authenticate(): boolean {
    const token = localStorage.getItem('access_token');
    
    if (token) {
      console.log('token found');
      return true;
    } else {
      console.log('token unavailable');
      return false;
    }
  }

  login(user: User): Observable<any> {
    return this.http.post<any>('https://ancient-anchorage-93435.herokuapp.com/api/login', user);
  }
}
