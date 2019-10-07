import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/models/Skill';

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input('skill') skill: Skill;

  constructor() { }

  ngOnInit() {
  }

}
