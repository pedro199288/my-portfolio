import { Component, OnInit } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [
    AuthService
  ]
})
export class NavbarComponent implements OnInit {
  public links: any[];
  public showing: boolean;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    this.showing = false;
    this.links = [
      {
        "name"    : 'home',
        "active"  : true,
        "route"   : "",
        "reference" : 'hero-home'
      },
      {
        "name"    : 'about',
        "active"  : true,
        "route"   : "home",
        "reference" : 'about'
      },
      {
        "name"    : 'experience',
        "active"  : true,
        "route"   : "experience",
        "reference" : 'experience'
      },
      {
        "name"    : 'education',
        "active"  : true,
        "route"   : "education",
        "reference" : 'education'
      },
      {
        "name"    : 'portfolio',
        "active"  : true,
        "route"   : "portfolio",
        "reference" : 'portfolio'
      }
    ];
  }

  ngOnInit() {
    // Filter those links which have active = true
    this.links = this.links.filter(link => link.active );
  }

  toggleMenu() {
    this.showing = !this.showing;
  }

  scrollTo(el: string) {
    console.log(el);
    let element = document.getElementById(el);
    element.scrollIntoView({block: "start", behavior: "smooth"});
  }

  logout(){
    this.auth.logout();
    alert('logued out correctly');
    this.router.navigate(['']);
  }

}
