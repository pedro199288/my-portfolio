import { Component, OnInit } from '@angular/core';
import { Experience } from '../../models/Experience';
import { ExperienceService } from '../../services/experience.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  providers: [
    ExperienceService,
    AuthService
  ]
})
export class ExperienceComponent implements OnInit {
  public experience: Experience[];
  
  constructor(
    private _experienceService: ExperienceService,
    private auth: AuthService
  ) {

  }

  ngOnInit() {
    var startDateA, startDateB;
    this._experienceService.getAll().subscribe(
      result => {
        this.experience = result.experience;

        // Sort the documents received by its date.start
        this.experience.sort((a, b) => {
          startDateA = new Date (a.date.start);
          startDateB = new Date (b.date.start);
          return startDateA > startDateB ? -1 : (startDateA < startDateB ? 1 : -1 );
        });
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  // Makes something with the main array with model used in the component (example: education.component has an array with Education objects) dependeing on the data and eventType params received
  eventFromChild(data) {
    // get the id and the index, only used for update and delete cases.
    const id = data.object._id;
    const index = this.experience.findIndex(object => object._id === id);

    if(data.type == 'create') {
      // add the new object to the array containing model objects
      this.experience.push(data.object)
    } else if (data.type == 'update') {
      // update the object on the index where the id has been found
      this.experience[index] = data.object;

    } else if (data.type == 'delete') {
      // delete the object of the index where the id has been found
      this.experience.splice(index, 1);
    }
  }
}
