import { Component, OnInit } from '@angular/core';
import { EducationService } from '../../services/education.service';
import { Education } from 'src/app/models/Education';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers: [EducationService]
})
export class EducationComponent implements OnInit {
  public education: Education[];

  constructor(
    private _educationService: EducationService
  ) {
    this._educationService.getAll().subscribe(
      result => {
        this.education = result.education;
        console.log(this.education);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  ngOnInit() {
  }

  // Makes something with the main array with model used in the component (example: education.component has an array with Education objects) dependeing on the data and eventType params received
  eventFromChild(data) {
    // get the id and the index, only used for update and delete cases.
    const id = data.object._id;
    const index = this.education.findIndex(object => object._id === id);

    if(data.type == 'create') {
      // add the new object to the array containing model objects
      this.education.push(data.object)
    } else if (data.type == 'update') {
      // update the object on the index where the id has been found
      this.education[index] = data.object;

    } else if (data.type == 'delete') {
      // delete the object of the index where the id has been found
      this.education.splice(index, 1);
    }
  }

}
