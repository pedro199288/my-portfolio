import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router 
  ) { }

  // TODO: For our demo application, we are simply checking for the existence of a JWT in local storage. In real-world applications, you would decode the token and check its validity, expiration, etc. For example, you could use JwtHelperService for this.
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(localStorage.getItem('access_token')) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
