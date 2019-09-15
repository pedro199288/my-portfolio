import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent{
  public username: string;
  public password: string;
  public error: string;

  constructor(
    private auth: AuthService, 
    private router: Router
  ) { }

  public submit() {
    this.auth.login(this.username, this.password)
      .pipe(first())
      .subscribe(
        result => this.router.navigate(['']),
        err => this.error = 'Could not authenticate'
      );
  }

  logout(){
    this.auth.logout();
    alert('logued out correctly');
    this.router.navigate(['']);
  }

}
