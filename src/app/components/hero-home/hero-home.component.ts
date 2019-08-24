import { Component, OnInit } from '@angular/core';
import { personalData } from '../../services/data';
import { element } from 'protractor';

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
  public valuesIWant : string[];

  constructor() {
    // this.firstName = personalData.firstName;
    // this.lastName = personalData.lastName;
    // this.shortDescription = personalData.shortDescription;
    this.valuesIWant = [
      'firstname',
      'lastname',
      'shortDescription'
    ];
  }

  ngOnInit() {
    var arrayData = [];
    arrayData.push( personalData.find(element => this.valuesIWant.includes(element.key) ) );
    // TODO: Arreglar todo este lio
    console.log(arrayData);

    this.firstName = personalData.firstName;
    this.lastName = personalData.lastName;
    this.shortDescription = personalData.shortDescription;
  }

}

/**
 * Looks for an object inside of an array that has the key -> value pairs passed in params
 */
function findObjectOnArray(key, value) {

}

