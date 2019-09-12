import { Component, OnInit } from '@angular/core';
import { Experience } from '../../models/Experience';
import { ExperienceService } from '../../services/experience.service';


@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  providers: [ExperienceService]
})
export class ExperienceComponent implements OnInit {
  public experience: Experience[];
  
  constructor(
    private _experienceService: ExperienceService
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
}
