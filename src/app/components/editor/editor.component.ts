import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  public active: boolean;
  @Input('data') data: string;


  constructor() {
    this.active = true;
  }

  ngOnInit() {
    console.log(this.data);
  }


  drag(e){
    console.log(e);
    console.log('drageando');
  }
}
