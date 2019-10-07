import { Component, OnInit, Input } from '@angular/core';
import { faUniversity, faGraduationCap, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Education } from 'src/app/models/Education';

@Component({
  selector: 'education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {
  @Input('edu_item') edu_item: Education;
  faUniversity = faUniversity;
  faGraduationCap = faGraduationCap;
  faQuestion = faQuestion;


  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
  }

}
