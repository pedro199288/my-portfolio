import { Injectable, ɵConsole } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Config } from '../config/config';

// service for check validity of jwt
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url: string;

  constructor(
    private http: HttpClient,
    private router: Router 
  ) {
    this.url = Config.API_URL;
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{token: string}>(this.url+'/auth', {username: username, password: password}).
      pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          return true;
        })
      )
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    const jwtHelper = new JwtHelperService(); 
    // check if access_token is set and its validity and expiration
    if(localStorage.getItem('access_token')) {
      const myJwt = localStorage.getItem('access_token');
      // check expiration
      const isExpired = jwtHelper.isTokenExpired(myJwt);

      // if token not expired, allow entry
      if(!isExpired) return true;
    }

    return false;
  }
}
