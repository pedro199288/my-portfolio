import { Component, OnInit } from '@angular/core';
import { SkillService } from './../../services/skill.service';
import { Skill } from '../../models/Skill';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [
    SkillService,
    AuthService
  ]
})
export class SkillsComponent implements OnInit {
  public skills: Skill[];
  public editing;

  constructor(
    private _skillService: SkillService,
    private auth: AuthService,
  ) {
    this.editing = false;
  }

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

  // Makes something with the main array with model used in the component (example: education.component has an array with Education objects) dependeing on the data and eventType params received
  eventFromChild(data) {
    if(data.type != 'toggle') {
      // get the id and the index, only used for update and delete cases.
      const id = data.object._id;
      const index = this.skills.findIndex(object => object._id === id);
      
      if(data.type == 'create') {
        // add the new object to the array containing model objects
        this.skills.push(data.object)
      } else if (data.type == 'update') {
        // update the object on the index where the id has been found
        this.skills[index] = data.object;
  
      } else if (data.type == 'delete') {
        // delete the object of the index where the id has been found
        this.skills.splice(index, 1);
      }
    } else {
      this.editing = !this.editing;
    }
  } 

}
