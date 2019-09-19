import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; // import this to use params in urls
import { ProjectService } from '../../services/project.service';
import { Project } from 'src/app/models/Project';
import { Config } from 'src/app/config/config';


@Component({
  selector: 'view-project',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css'],
  providers: [ProjectService] // Include de 'RequestsService' class in the providers array of the component where I use it
})
export class ViewProjectComponent implements OnInit {
  public id: string;
  public project: Project;
  public apiUrl: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _projectService: ProjectService
  ) {
    this.apiUrl = Config.API_URL;
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params.id;

    });
    
    this._projectService.getOneById(this.id).subscribe(
      result => {        
        this.project = result.project;
      },
      error => {
        console.log(<any>error);
      }
    )

  }
}
