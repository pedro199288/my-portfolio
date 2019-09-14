import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from 'src/app/models/Project';
import { Config } from 'src/app/config/config';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [ProjectService]
})
export class PortfolioComponent implements OnInit {
  projects: Project[];
  apiUrl: string;

  constructor(
    private _projectService: ProjectService
  ) {
    this._projectService.getAll().subscribe(
      result => {
        this.projects = result.projects;
      },
      error => {
        console.log(<any>error);
      }
    )

    this.apiUrl = Config.API_URL;
  }

  ngOnInit() {
  }

  // Makes something with the main array with model used in the component (example: education.component has an array with Education objects) dependeing on the data and eventType params received
  eventFromChild(data) {
    // get the id and the index, only used for update and delete cases.
    const id = data.object._id;
    const index = this.projects.findIndex(object => object._id === id);

    if(data.type == 'create') {
      // add the new object to the array containing model objects
      this.projects.push(data.object)
    } else if (data.type == 'update') {
      // update the object on the index where the id has been found
      this.projects[index] = data.object;

    } else if (data.type == 'delete') {
      // delete the object of the index where the id has been found
      this.projects.splice(index, 1);
    }
  }

}
