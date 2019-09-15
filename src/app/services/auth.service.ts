import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url: string;

  constructor(
    private http: HttpClient
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
      // TODO: add errorhandling 
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    // TODO: check if access_token is set and its validity and expiration
    return (localStorage.getItem('access_token') !== null);
  }
}
