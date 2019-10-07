import { Component, OnInit } from '@angular/core';
import { personalData } from '../../services/data';
import { Helper } from '../../services/helper.service';

@Component({
  selector: 'hero-home',
  templateUrl: './hero-home.component.html',
  styleUrls: ['./hero-home.component.css']
})
export class HeroHomeComponent implements OnInit {
  public firstName: any;
  public lastName: any;
  public shortDescription: any;
  public dataToShow : string[];
  public personalData: object[];

  constructor() {
    this.personalData = personalData;
    this.firstName = Helper.fetchDataByKey('firstName', personalData);
    this.lastName = Helper.fetchDataByKey('lastName', personalData);
    this.shortDescription = Helper.fetchDataByKey('shortDescription', personalData);
  }

  ngOnInit() {

  }

  scrollTo(el: string, e) {
    e.preventDefault();
    let element = document.getElementById(el);
    element.scrollIntoView({block: "start", behavior: "smooth"});
  }
}
