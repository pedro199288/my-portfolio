import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// service for check validity of jwt
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router 
  ) { }

  // check if jwt is valid and if it is, let the user in.... I AM NOT USING THIS FUNCTIONALLITY, BUT KEEP IT HERE AS EXAMPLE
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const jwtHelper = new JwtHelperService(); 

    if(localStorage.getItem('access_token')) {
      const myJwt = localStorage.getItem('access_token');
      // check validity and expiration
      const decodedToken = jwtHelper.decodeToken(myJwt); // with this we could check if the user have permissions to do something
      const expirationDate = jwtHelper.getTokenExpirationDate(myJwt);
      const isExpired = jwtHelper.isTokenExpired(myJwt);

      // if token not expired, allow entry
      if(!isExpired) return true;
      
      return false;
    }

    this.router.navigate(['login']);
    return false;
  }
}
