import { Component, OnInit } from '@angular/core';
import { portfolio } from './../../services/data';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolio: object;

  constructor() {
    this.portfolio = portfolio;
  }

  ngOnInit() {
  }

}
