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
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  ngOnInit() {
  }

}
