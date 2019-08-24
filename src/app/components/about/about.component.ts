import { Component, OnInit } from '@angular/core';
import { personalData } from './../../services/data';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public personalData: any[];

  constructor() {
    this.personalData = [
      {
        'key' : 'firstName'
      }
    ]
  }

  ngOnInit() {

  }

}
