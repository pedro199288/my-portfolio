import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public links: object[];

  constructor() {
    this.links = [
      {
        "name"    : 'home', // TODO: Cargar los textos con un service en español o inglés según corresponda,
        "active"  : true,
        "route"   : "poner_ruta"
      },
      {
        "name"    : 'about',
        "active"  : true,
        "route"   : "poner_ruta"
      },
      {
        "name"    : 'education',
        "active"  : true,
        "route"   : "poner_ruta"
      },
      {
        "name"    : 'experience',
        "active"  : true,
        "route"   : "poner_ruta"
      },
      {
        "name"    : 'works',
        "active"  : true,
        "route"   : "poner_ruta"
      }
    ];
  }

  ngOnInit() {
    // Filter those links which have active = true
    this.links = this.links.filter(link => link.active );
  }

}
