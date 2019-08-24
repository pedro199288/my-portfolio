import { Component, OnInit } from '@angular/core';
import { skills } from './../../services/data';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills: object[];

  constructor() {
    this.skills = skills;
  }

  ngOnInit() {
  }

}
