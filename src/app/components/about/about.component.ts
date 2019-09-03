import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/app/services/helper.service';
import { PersonalDataService } from '../../services/personal-data.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [PersonalDataService]
})
export class AboutComponent implements OnInit {
  public personalData;
  public dataLeft;
  public dataRight;
  public description;

  constructor(
    private _personalDataService: PersonalDataService
  ) {
  }
  
  
  ngOnInit() {
    this.personalData = false;
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

}
