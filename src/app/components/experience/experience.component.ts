import { Component, OnInit } from '@angular/core';
import { experience } from './../../services/data';
import { Helper } from  './../../services/helper';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  public experience: object[];
  
  constructor() {
    this.experience = experience;
  }

  ngOnInit() {
    var startDateA, startDateB;

    this.experience.sort((a, b) => {
      startDateA = new Date (a.date.start);
      startDateB = new Date (b.date.start);
      return startDateA > startDateB ? -1 : (startDateA < startDateB ? 1 : -1 );

      // if ( startDateA > startDateB ){
      //   return -1;
      // }
      // if ( startDateA < startDateB ){
      //   return 1;
      // }
      // return 0;
    });
  }
}
