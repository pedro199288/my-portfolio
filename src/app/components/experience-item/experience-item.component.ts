import { Component, OnInit, Input } from '@angular/core';
import { Experience } from './../../models/Experience';

@Component({
  selector: 'experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {
  @Input('exp_item') exp_item: Experience;

  constructor() { }

  ngOnInit() {
  }

}
