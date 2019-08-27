import { Component, OnInit, Input } from '@angular/core';
import { faUniversity, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {
  @Input('edu_item') edu_item: object;
  faUniversity = faUniversity;
  faGraduationCap = faGraduationCap;

  constructor() { }

  ngOnInit() {
  }

}
