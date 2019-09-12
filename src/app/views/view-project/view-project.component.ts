import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; // import this to use params in urls
import { ProjectService } from '../../services/project.service';


@Component({
  selector: 'view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css'],
  providers: [ProjectService] // Include de 'RequestsService' class in the providers array of the component where I use it
})
export class ViewProjectComponent implements OnInit {
  public key: string;
  // TODO: create project propety. Maybe is a better option to create it with input decorator and bring the project from the parent...think about it 

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _projectService: ProjectService
  ) {
 
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.key = params.key;

    });
    
    this._projectService.getOneById(this.key).subscribe(
      result => {
        console.log(result);
        // TODO: check that project's data are received
      },
      error => {
        console.log(<any>error);
      }
    )

  }
}
