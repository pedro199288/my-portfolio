import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; // import this to use params in urls
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css'],
  providers: [RequestsService] // Include de 'RequestsService' class in the providers array of the component where I use it
})
export class ViewProjectComponent implements OnInit {
  public key: string;


  // TODO: DELETE OR MODIFY WITH REAL PROPERTIES
  public user: any; 
  public new_user: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _requestsService: RequestsService
  ) {
    //TODO: delete this when finished
    this.new_user = {
      "name" : "",
      "job"  : ""
    };
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.key = params.key;
      // TODO: With this key, get the whole project data to show it on this page (service, http...)

    })

    // Tests of RequestsService TODO: Delete or modify with the real api of the project
    this.user = false;
    this._requestsService.getUsers().subscribe(
      result => {
        console.log(result);
        this.user = result.data;
        console.log(this.user);
      },
      error => {
        console.log(<any>error);
      }
    )

  }

  onSubmit(form) {
    this._requestsService.addUser(this.new_user).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }


}
