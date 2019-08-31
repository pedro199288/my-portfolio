import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public date: Date;
  constructor() {
    this.date = new Date();
  }

  ngOnInit() {

  }

}
