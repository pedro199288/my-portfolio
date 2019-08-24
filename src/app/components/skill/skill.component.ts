import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input('skill') skill: object;

  constructor() { }

  ngOnInit() {
  }

}
