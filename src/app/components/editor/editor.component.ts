import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  public active: boolean;
  @Input('personalData') personalData: string;


  constructor() {
    this.active = false;
  }

  ngOnInit() {

  }

}
