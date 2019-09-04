import { Component, OnInit, Input, HostListener } from '@angular/core';
import { PersonalData } from 'src/app/models/PersonalData';
import { Education } from 'src/app/models/Education';
import { Experience } from 'src/app/models/Experience';
import { Skill } from 'src/app/models/Skill';
import { Project } from 'src/app/models/Project';
import { PersonalDataService } from 'src/app/services/personal-data.service';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers: [
    PersonalDataService,
  ]
})
export class EditorComponent implements OnInit {
  // properties for the form itself
  public active: boolean;
  public x_pos: number;
  public y_pos: number;
  public editorElement: any;
  public dragging: boolean;
  public status: string;
  public message: string;

  // properties with the data coming from the others components
  @Input('data') data: any;
  @Input('dataName') dataName: string;

  // properites with the models
  public personalData: PersonalData;
  public education: Education;
  public experience: Experience;
  public skill: Skill;
  public project: Project;
  
  constructor(
    private _personalDataService: PersonalDataService
  ) {
      this.active = false; // By default, the component won't be displayed, because is inactive
      this.status = null;
      this.message = null;
      this.dragging = false; // this property turns to true when mousedown on the head of the editor component
      
      // assign component's objects to the properties, to be used when creating a new object with the editor component
      this.personalData = new PersonalData('', '', '', '', false);
      this.education = new Education('', '', {start: new Date, end: new Date}, '', '', '', '');
      this.experience = new Experience('', '', {start: new Date, end: new Date}, '', '', '');
      this.skill = new Skill('', '', '', 0);
      this.project = new Project('', '', '', '', [''], '', '', '');
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

  // method for saving new documents of the components
  save(form) {
    console.log(this.personalData);
    this._personalDataService.save(this.personalData).subscribe(
        response => {
          console.log(response);
          if(response.personalData) {
            this.status = 'success';
            this.message = 'Data saved !!';
          } else {
            this.status = 'error';
            this.message = 'Save error!!';
          }
        },
        error => {
          console.log(<any>error);
          this.status = 'error';
          this.message = null;
        }
    );

    // remove the respnose by changing this.status value
    setTimeout(() => {
      this.status = null;
    }, 3000);
  }


  // method for updating documents of the components
  update(form) {
    console.log(form.form.value);
    this._personalDataService.save(this.personalData).subscribe(
        response => {
          console.log(response);
          if(response.personalData) {
            this.status = 'success';
            this.message = 'Data saved !!';
          } else {
            this.status = 'error';
            this.message = 'Save error!!';
          }
        },
        error => {
          console.log(<any>error);
          this.status = 'error';
          this.message = null;
        }
    );

    // remove the respnose by changing this.status value
    setTimeout(() => {
      this.status = null;
    }, 3000);
  }


  // method for deleting documents
  delete(id) {
    console.log(id);
    this._personalDataService.delete(id).subscribe(
      response => {
        console.log(response);
        if(response.personalDataDeleted) {
          this.status = 'success';
          this.message = 'Data deleted !!';
          // TODO: reloads de forms to not display the deleted one
        } else {
          this.status = 'error';
          this.message = 'Delete error !!';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
    // remove the respnose by changing this.status value
    setTimeout(() => {
      this.status = null;
      this.message = null;
    }, 3000);
  }

}
