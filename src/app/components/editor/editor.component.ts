import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  public active: boolean;
  public x_pos: number;
  public y_pos: number;
  public editorElement: any;
  public dragging: boolean;

  @Input('data') data: string;
  @Input('dataName') dataName: string;
  
  constructor() {
      this.active = false; // By default, the component won't be displayed, because is inactive
      this.dragging = false; // this property turns to true when mousedown on the head of the editor component
  }
  
  ngOnInit() {
    // The initial position of the editor's div
    this.x_pos = 0;
    this.y_pos = 0;
    console.log(this.data);
    console.log(this.dataName);
  }

  // Capture events for mousemove
  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e) {
    if (this.dragging === true) { // Only will drag the component if this.dragging === true, this is when mousedown on editor's head
      this.editorElement.style.position = 'fixed';
      this.editorElement.style.top = (e.clientY - this.y_pos) + 'px';
      this.editorElement.style.left = (e.clientX - this.x_pos) + 'px';
    }
  }

  // Capture events for mouseup
  @HostListener('document:mouseup', ['$event']) 
  onMouseUp(e) {
    if (this.dragging === true) {
      this.dragging = false; // turns dragging into false, to stop de movement of the component when 'mousemove' event
    }
  }
    
  // TODO: Documentate right this function and remove unnecessary comments
  drag(e){
    // select the draggable element
    this.editorElement = document.querySelector('.editor.editor-active');

    // get the position of the div
    this.x_pos = e.clientX - this.editorElement.offsetLeft;
    this.y_pos = e.clientY - this.editorElement.offsetTop;
    this.dragging = true

    // console.log("client");
    // console.log(e.clientX, e.clientY);
    // console.log(this.y_pos, this.x_pos);

    // console.log("offset");
    // console.log(elElemento.offsetLeft, elElemento.offsetTop);

    // console.log("pos");
    // console.log(x_pos, y_pos);
    // window.addEventListener('mousemove', this.divMove(e, this.editorElement), true);
  }
    
  onSubmit(form){
    console.log(form);
  }


}
