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
    public auth: AuthService,
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

    this.dislayControl(this.paddingTopPage);
  }

  toggleMenu() {
    this.showing = !this.showing;
  }

  logout(){
    this.auth.logout();
    alert('logued out correctly');
    this.router.navigate(['']);
  }

  dislayControl(paddingTopPage){
    // Animate navbar when scrolling up or down
    var navBar = document.getElementById("navbar");
    if(navBar){
      const navBarOffsetIni = navBar.offsetTop; // get initial position related to top of page
      var navBarHeight = navBar.clientHeight; // get heigth related to top of page

      // last position of scrollTop
      var lastScrollTop = 0;

      // detect scroll direction
      window.addEventListener("scroll", function(){
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop){
          // downscroll code
          if (window.document.documentElement.scrollTop > navBarOffsetIni) {
            paddingTopPage(navBarHeight);
            navBar.style.top = -navBarHeight+'px';
            navBar.style.position = 'fixed';
          }
        } else {
          // upscroll code
          navBar.style.top = "0px";
          if (window.document.documentElement.scrollTop < navBarOffsetIni ) {
            navBar.style.position = 'relative';
          }
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      }, false);
    }
  }

  /** Adds padding-top to the element af the top of the page (not taking into account the navbar) */
  paddingTopPage(paddingTop){
    var withPadding = document.querySelector('.padding-navbar');
    var withHeight = document.querySelector('.height-navbar');
    if (withPadding) {
      // add padding to the element
      // @ts-ignore
      withPadding.style.paddingTop = (50 + paddingTop)+'px';
    } else if (withHeight) {
      var vh25 = window.innerHeight/4; // get the 25vh value
      // add height to the element
      // @ts-ignore
      withHeight.style.height = (vh25 + paddingTop)+'px';
      // @ts-ignore
      document.querySelector('.hero h2').style.marginTop = paddingTop+'px';
    }

  }

}
