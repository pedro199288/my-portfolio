import { Component, OnInit } from '@angular/core';
import { projects } from './../../services/data';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects: object;

  constructor() {
    this.projects = projects;
  }

  ngOnInit() {
  }

}
