import { Component, OnInit } from '@angular/core';
import { personalData } from '../../services/data';

@Component({
  selector: 'hero-home',
  templateUrl: './hero-home.component.html',
  styleUrls: ['./hero-home.component.css']
})
export class HeroHomeComponent implements OnInit {
  // public personalData: object;
  public firstName: string;
  public lastName: string;
  public shortDescription: string;

  constructor() {
    this.firstName = personalData.firstName;
    this.lastName = personalData.lastName;
    this.shortDescription = personalData.shortDescription;
  }

  ngOnInit() {
    
  }

}

