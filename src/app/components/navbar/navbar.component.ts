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
        "route"   : "about",
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

  // TODO: make fixed on top when passed Y pageheight, and hide when scrolling down, show when up

  ngOnInit() {
    // Filter those links which have active = true
    this.links = this.links.filter(link => link.active );

    //this.dislayControl();
  }

  toggleMenu() {
    this.showing = !this.showing;
  }

  logout(){
    this.auth.logout();
    alert('logued out correctly');
    this.router.navigate(['']);
  }

  dislayControl(){
    // Animate navbar when scrolling up or down
    var navBar = document.getElementById("navbar");
    if(navBar){
      console.log(navBar.offsetTop); // TODO: ver que tengo que obtener del navbar
        // last position of scrollTop
        var lastScrollTop = 0;
        
        // detect scroll direction
        window.addEventListener("scroll", function(){ 
            if (window.pageYOffset > 90 || document.documentElement.scrollTop > 90) {
                var st = window.pageYOffset || document.documentElement.scrollTop;
                if (st > lastScrollTop){
                    // downscroll code
                    navBar.style.top = "-80px";
                } else {
                    // upscroll code
                    navBar.style.top = "0px";
                }
                lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
            }
        }, false);
    }
  }

}
