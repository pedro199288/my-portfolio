import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from 'src/app/models/Project';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [ProjectService]
})
export class PortfolioComponent implements OnInit {
  projects: Project[];

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
  }

  ngOnInit() {
  }

}
