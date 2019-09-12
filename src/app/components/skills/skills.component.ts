import { Component, OnInit } from '@angular/core';
import { SkillService } from './../../services/skill.service';
import { Skill } from '../../models/Skill';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [SkillService]
})
export class SkillsComponent implements OnInit {
  public skills: Skill[];

  constructor(
    private _skillService: SkillService
  ) {  }

  ngOnInit() {
    this._skillService.getAll().subscribe(
      result => {
        this.skills = result.skills
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
