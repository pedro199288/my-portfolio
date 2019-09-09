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

  /**
   *  method for saving new documents of the components
   * @var form, the form that is sending the data to be updated
   * @var thisProperty, the property of this class which will be saved
   */
  save(form, thisProperty) { // TODO: cretate all forms for saving new data, with the thisProperty param corresponding to each objectType
    console.log(this[thisProperty]);
    // call the service method, here we refer to the method by concatenating '_' and 'Service' with the property being saved
    this['_'+thisProperty+'Service'].save(this[thisProperty]).subscribe(
        response => {
          console.log(response);
          if(response[thisProperty]) {
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


  /**
   * method for updating documents of the components
   * @var form, the form that is sending the data to be updated
   * @var service, the service that is needed to update the passed form
   */
  update(form, objectType) { // TODO: cretate all forms for updating data, with the objectType param corresponding to each objectType
    // assing values from the form to this variable
    var dataForm = form.form.value;

    // create a new object with the received data depending on the param 'objectType'
    var preparedData = this.manageData(dataForm, objectType);

    // asign data for updating to a variable
    var updatingData = preparedData.data;

    // execute service's method to update data
    this[preparedData.serviceName].update(updatingData).subscribe(
        response => {
          console.log(response);
          if(response[preparedData.sucProp]) {
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

  /**
   * Deals with the data depending on the param 'service' received
   * @returns the service to be used, the updating object and the expected response property if updated successfully
   */
  manageData(dataForm, ObjectType: string) {
    switch (ObjectType) {
      case 'PersonalData':
        // create updating Object
        var updatingData = new PersonalData(dataForm._id, dataForm.key, dataForm.text, dataForm.value, dataForm.link );
        // expected property in success case
        var sucProperty = 'personalDataUpdated';
        // service name
        var serviceName = '_personalDataService';
        break;
      // TODO: create all updating forms and his service name as param on the onSubmit's function
      case 'PersonalData':
        // create updating Object
        var updatingData = new PersonalData(dataForm._id, dataForm.key, dataForm.text, dataForm.value, dataForm.link );
        // expected property in success case
        var sucProperty = 'personalDataUpdated';
        // service name
        var serviceName = '_personalDataService';
        break;

      case 'PersonalData':
        // create updating Object
        var updatingData = new PersonalData(dataForm._id, dataForm.key, dataForm.text, dataForm.value, dataForm.link );
        // expected property in success case
        var sucProperty = 'personalDataUpdated';
        // service name
        var serviceName = '_personalDataService';
        break;

      case 'PersonalData':
        // create updating Object
        var updatingData = new PersonalData(dataForm._id, dataForm.key, dataForm.text, dataForm.value, dataForm.link );
        // expected property in success case
        var sucProperty = 'personalDataUpdated';
        // service name
        var serviceName = '_personalDataService';
        break;

      case 'PersonalData':
        // create updating Object
        var updatingData = new PersonalData(dataForm._id, dataForm.key, dataForm.text, dataForm.value, dataForm.link );
        // expected property in success case
        var sucProperty = 'personalDataUpdated';
        // service name
        var serviceName = '_personalDataService';
        break;

      case 'PersonalData':
        // create updating Object
        var updatingData = new PersonalData(dataForm._id, dataForm.key, dataForm.text, dataForm.value, dataForm.link );
        // expected property in success case
        var sucProperty = 'personalDataUpdated';
        // service name
        var serviceName = '_personalDataService';
        break;
      default:
        break;
    }

    // return the data needed to execute the update depending on the objectType coming from the form
    return {
      data:   updatingData,
      sucProp: sucProperty,
      serviceName: serviceName
    }


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
