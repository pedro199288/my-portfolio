import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/app/services/helper.service';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [RequestsService]
})
export class AboutComponent implements OnInit {
  public personalData;
  public dataLeft;
  public dataRight;
  public description;

  constructor(
    private _requestsService: RequestsService
  ) {
  }
  
  
  ngOnInit() {
    // Tests of RequestsService TODO: Delete or modify with the real api of the project
    this.personalData = false;
    this._requestsService.getPersonalData().subscribe(
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
    )


    





  }

}
