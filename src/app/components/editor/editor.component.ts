import { Component, OnInit, Input, EventEmitter, HostListener, Output, ViewEncapsulation } from '@angular/core';
import { Config } from '../../config/config';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

// models
import { PersonalData } from 'src/app/models/PersonalData';
import { Education } from 'src/app/models/Education';
import { Experience } from 'src/app/models/Experience';
import { Skill } from 'src/app/models/Skill';
import { Project } from 'src/app/models/Project';

// services
import { PersonalDataService } from 'src/app/services/personal-data.service';
import { SkillService } from 'src/app/services/skill.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { EducationService } from 'src/app/services/education.service';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'editor',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  providers: [
    PersonalDataService,
    SkillService,
    ExperienceService,
    EducationService,
    ProjectService,
    UploadService
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
  public apiUrl: string;
  faPencilAlt  = faPencilAlt ;
  icon;
  // properties with the data coming from the others components
  @Input('data') data: any;
  @Input('dataName') dataName: string;
  // Output property to send data to parent
  @Output() sendDataToParent = new EventEmitter();

  // properties with the models of the app
  public personalData: PersonalData;
  public education: Education;
  public experience: Experience;
  public skill: Skill;
  public project: Project;
  public filesToUpload: File[];

  constructor(
    private _personalDataService: PersonalDataService,
    private _skillService: SkillService,
    private _experienceService: ExperienceService,
    private _educationService: EducationService,
    private _projectService: ProjectService,
    private _uploadService: UploadService,
  ) {
      this.active = false; // By default, the component won't be displayed, because is inactive
      this.status = null;
      this.message = null;
      this.dragging = false; // this property turns to true when mousedown on the head of the editor component
      this.apiUrl = Config.API_URL;
      
      // assign component's objects to the properties, to be used when creating a new object with the editor component
      this.personalData = new PersonalData('', '', '', '', false);
      this.skill = new Skill('', '', '', 0);
      this.experience = new Experience('', '', {start: '', end: ''}, '', '', '');
      this.education = new Education('', '', {start: '', end: ''}, '', '', '', '');
      this.project = new Project('','',1000,'', '', [''], '', '', '');
  }
  
  ngOnInit() {
    // The initial position of the editor's div
    this.x_pos = 0;
    this.y_pos = 0;
  }

  // Capture events for mousemove
  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e) {
    if (this.dragging === true) { // Only will drag the component if this.dragging === true, this is when mousedown on editor's head
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
    

  drag(e){
    // select the draggable element
    this.editorElement = document.querySelector('.editor.editor-active');

    // get the position of the div
    this.x_pos = e.clientX - this.editorElement.offsetLeft;
    this.y_pos = e.clientY - this.editorElement.offsetTop;
    
    // set this.dragging = true to make the editor draggable
    this.dragging = true
  }

  // opens/closes the editor and emit that to parent, to change its margin
  toggle(){
    this.active = !this.active; 
    this.sendDataToParent.emit({ type: 'toggle'});
  }


  /**
   *  method for saving new documents of the components
   * @var form, the form that is sending the data to be updated
   * @var thisProperty, the property of this class which will be saved
   */
  save(form, thisProperty) {
    console.log(this[thisProperty]);
    // call the service method, here we refer to the method by concatenating '_' and 'Service' with the property being saved
    this['_'+thisProperty+'Service'].save(this[thisProperty]).subscribe(
        response => {
          console.log(response);
          if(response[thisProperty]) {
            // if the object being saved has filesToUpload, then upload image
            if(this.filesToUpload) { 
              this._uploadService.makeFileRequest(this.apiUrl+"/project/upload-image/"+response[thisProperty]._id, [], this.filesToUpload, 'image' )
                .then((result: any) => {
                  console.log(result);
                  this.status = 'success';
                  this.message = 'Data saved with image !!';
                  
                  // Emit and event to the parent to check the new data saved on db and add it to the component data property. 
                  this.sendDataToParent.emit({object: result.projectUpdated, type: 'create'});
                })
                .catch(error => {
                  console.log(error);
                  this.status = 'error';
                  this.message = 'Data saved but ERROR with image !!';
                }
              );
            } else {
              // message if there is not image to upload
              this.status = 'success';
              this.message = 'Data saved !!';

              // Emit and event to the parent to check the new data saved on db and add it to the component data property. 
              this.sendDataToParent.emit({object: response[thisProperty], type: 'create'});
            }
            // reset the form            
            form.reset();    
            // set to null filesToUpload
            this.filesToUpload = null;        
          } else {
            this.status = 'error';
            this.message = 'Save error!!';
          }
        },
        error => {
          console.log(<any>error);
          this.status = 'error';
          this.message = 'ERROR: ' + error.statusText;
        }
    );

    // remove the respnose by changing this.status value
    setTimeout(() => {
      this.status = null;
    }, 3000);
  }

  // Add file to the property when the event ocurs
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }


  /**
   * method for updating documents of the components
   * @var form, the form that is sending the data to be updated
   * @var service, the service that is needed to update the passed form
   */
  update(form, objectType) {
    // passing values from the form to this variable
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
            // if the object being saved has filesToUpload, then upload image
            if(this.filesToUpload) {
              this._uploadService.makeFileRequest(this.apiUrl+"/project/upload-image/"+response[preparedData.sucProp]._id, [], this.filesToUpload, 'image' )
              .then((result: any) => {
                console.log(result);
                this.status = 'success';
                this.message = 'Data saved with image !!';

                // Emit and event to the parent to check the data updated on db and change it on the component data property. 
                this.sendDataToParent.emit({object: result.projectUpdated, type: 'update'});
              })
              .catch(error => {
                console.log(error);
                this.status = 'error';
                this.message = 'Data saved but ERROR with image !!';
              }
              );
            } else {
              this.status = 'success';
              this.message = 'Data saved !!';

              // Emit and event to the parent to check the data updated on db and change it on the component data property. 
              this.sendDataToParent.emit({object: response[preparedData.sucProp], type: 'update'});
            }
            
            // set to null filesToUpload
            this.filesToUpload = null; 
          } else {
            this.status = 'error';
            this.message = 'Save error!!';
          }
        },
        error => {
          console.log(<any>error);
          this.status = 'error';
          this.message = 'ERROR: ' + error.statusText;
        }
    );

    // remove the respnose by changing this.status value
    setTimeout(() => {
      this.status = null;
    }, 3000);
  }

  
  // method for deleting documents
  delete(id, thisProperty) {
    this['_'+thisProperty+'Service'].delete(id).subscribe(
      response => {
        console.log(response);
        if(response[thisProperty+'Deleted']) {
          this.status = 'success';
          this.message = 'Data deleted !!';
          // Emit and event to the parent to remove the deleted data
          this.sendDataToParent.emit({object: response[thisProperty+'Deleted'], type: 'delete'});
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

  /**
   * Deals with the data depending on the param 'service' received
   * @returns the service to be used, the updating object and the expected response property if updated successfully
   */
  manageData(dataForm, ObjectType: string) {
    var updatingData: any;
    switch (ObjectType) {
      case 'PersonalData':
        // create updating Object
        updatingData = new PersonalData(dataForm._id, dataForm.key, dataForm.text, dataForm.value, dataForm.link );
        // expected property in success case
        var sucProperty = 'personalDataUpdated';
        // service name
        var serviceName = '_personalDataService';
        break;
      
      case 'Skill':
        // create updating Object
        updatingData = new Skill(dataForm._id, dataForm.key, dataForm.text, dataForm.value);
        // expected property in success case
        var sucProperty = 'skillUpdated';
        // service name
        var serviceName = '_skillService';
        break;

      case 'Experience':
        // create updating Object
        var start = dataForm.start != '' ? new Date(dataForm.start) : '';
        var end = dataForm.end != '' ? new Date(dataForm.end)  : '';
        updatingData = new Experience(dataForm._id, dataForm.key, { start, end }, dataForm.company, dataForm.rol, dataForm.description );
        // expected property in success case
        var sucProperty = 'experienceUpdated';
        // service name
        var serviceName = '_experienceService';
        break;

      case 'Education':
        // create updating Object
        var start = dataForm.start != '' ? new Date(dataForm.start) : '';
        var end = dataForm.end != '' ? new Date(dataForm.end)  : '';
        updatingData = new Education(dataForm._id, dataForm.key, { start, end }, dataForm.center, dataForm.name, dataForm.clarification, dataForm.link );
        // expected property in success case
        var sucProperty = 'educationUpdated';
        // service name
        var serviceName = '_educationService';
        break;

      case 'Project':
        // create updating Object
        updatingData = new Project(dataForm._id, dataForm.key, dataForm.order, dataForm.name, dataForm.company, dataForm.tools, dataForm.description, dataForm.website, dataForm.image );
        // expected property in success case
        var sucProperty = 'projectUpdated';
        // service name
        var serviceName = '_projectService';
        break;
    }

    // return the data needed to execute the update depending on the objectType coming from the form
    return {
      data:   updatingData,
      sucProp: sucProperty,
      serviceName: serviceName
    }


  }

}
