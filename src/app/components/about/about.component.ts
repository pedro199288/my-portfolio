import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/app/services/helper.service';
import { PersonalDataService } from '../../services/personal-data.service';
import { PersonalData } from '../../models/PersonalData';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [
    PersonalDataService,
    AuthService
  ]
})
export class AboutComponent implements OnInit {
  public personalData: PersonalData[];
  public dataLeft;
  public dataRight;
  public description;
  public editing;

  constructor(
    private _personalDataService: PersonalDataService,
    public auth: AuthService
  ) {
    this.editing = false;
  }
  
  
  ngOnInit() {
    this._personalDataService.getAll().subscribe(
      result => {
        this.personalData = result.personalData;

        // after getting the data, asign to variables and 
        var fullName = Helper.fetchDataByKey('fullname', this.personalData);
        var birthDay = Helper.fetchDataByKey('birthDay', this.personalData);
        var birthPlace = Helper.fetchDataByKey('birthPlace', this.personalData);
        var hobbies = Helper.fetchDataByKey('hobbies', this.personalData);
        var address = Helper.fetchDataByKey('address', this.personalData);
        var phone = Helper.fetchDataByKey('phone', this.personalData);
        var email = Helper.fetchDataByKey('email', this.personalData);
        var linkedin = Helper.fetchDataByKey('linkedin', this.personalData);
        this.description = Helper.fetchDataByKey('description', this.personalData);
        this.dataLeft = [fullName, birthDay, birthPlace, hobbies];
        this.dataRight = [address, phone, email, linkedin];
      },
      error => {
        console.log(<any>error);
      }
    );
  }


  // Makes something with the main array with model used in the component (example: education.component has an array with Education objects) dependeing on the data and eventType params received
  eventFromChild(data) {
    if(data.type != 'toggle') {
      // get the id and the index, only used for update and delete cases.
      const id = data.object._id;
      const index = this.personalData.findIndex(object => object._id === id);
      
      if(data.type == 'create') {
        // add the new object to the array containing model objects
        this.personalData.push(data.object)
      } else if (data.type == 'update') {
        // update the object on the index where the id has been found
        this.personalData[index] = data.object;
  
      } else if (data.type == 'delete') {
        // delete the object of the index where the id has been found
        this.personalData.splice(index, 1);
      }
    } else {
      this.editing = !this.editing;
    }
    
  }

}
