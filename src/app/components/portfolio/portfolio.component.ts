import { Component, OnInit, Input } from '@angular/core';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import { ProjectService } from '../../services/project.service';
import { Project } from 'src/app/models/Project';
import { Config } from 'src/app/config/config';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [
    ProjectService,
    AuthService
  ]
})
export class PortfolioComponent implements OnInit {
  projects: Project[];
  apiUrl: string;
  public editing;
  @Input('maxItems') maxItems: object;
  faPlus = faPlus;

  constructor(
    private _projectService: ProjectService,
    public auth: AuthService
  ) {
    this.apiUrl = Config.API_URL;
    this.maxItems = this.maxItems ? this.maxItems : null;
    this.editing = false;
  }

  ngOnInit() {
    this._projectService.getAll(this.maxItems).subscribe(
      result => {
        this.projects = result.projects;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  // Makes something with the main array with model used in the component (example: education.component has an array with Education objects) dependeing on the data and eventType params received
  eventFromChild(data) {
    if(data.type != 'toggle') {
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
    } else {
      this.editing = !this.editing;
    }
  }

}
