import { Component, OnInit } from '@angular/core';
import { personalData } from './../../services/data';
import { Helper } from 'src/app/services/helper';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public firstName;
  public lastName;
  public birthDay;
  public birthPlace;
  public address;
  public phone;
  public email;
  public linkedin;
  public description;
  public dataLeft;
  public dataRight;

  constructor() {
    this.firstName = Helper.fetchDataByKey('firstName', personalData);
    this.lastName = Helper.fetchDataByKey('lastName', personalData);
    this.birthDay = Helper.fetchDataByKey('birthDay', personalData);
    this.birthPlace = Helper.fetchDataByKey('birthPlace', personalData);
    this.address = Helper.fetchDataByKey('address', personalData);
    this.phone = Helper.fetchDataByKey('phone', personalData);
    this.email = Helper.fetchDataByKey('email', personalData);
    this.linkedin = Helper.fetchDataByKey('linkedin', personalData);
    this.description = Helper.fetchDataByKey('description', personalData);
    this.dataLeft = [this.firstName, this.lastName, this.birthDay, this.birthPlace];
    this.dataRight = [this.address, this.phone, this.email, this.linkedin];
  }


  ngOnInit() {

  }

}
