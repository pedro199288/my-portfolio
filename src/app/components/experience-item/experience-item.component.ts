import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {
  @Input('exp_item') exp_item: object;

  constructor() { }

  ngOnInit() {
  }

}
