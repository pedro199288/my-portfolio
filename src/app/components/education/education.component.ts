import { Component, OnInit } from '@angular/core';
import { education } from './../../services/data';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  public education: object[];

  constructor() {
    this.education = education;
  }

  ngOnInit() {
  }

}
