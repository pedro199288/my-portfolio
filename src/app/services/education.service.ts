// Service for education

// imports
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../config/config';
import { Education } from '../models/Education';

@Injectable()
export class EducationService{
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = Config.API_URL;
    }

    getAll(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url+'/education/all');
    }

    getOneById(id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url+'/education/'+id);
    }

    // Saves  document
    save(education: Education): Observable<any> {
        let params = JSON.stringify(education);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        // call the api save route
        return this._http.post(this.url+'/education/save', params, {headers: headers});
    }

    // Updates  document
    update(education: Education): Observable<any> {
        console.log(education);
        let params = JSON.stringify(education);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        // call the api update route
        return this._http.put(this.url+'/education/'+education._id, params, {headers: headers});
    }

    // Deletes  document
    delete(id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        // call the api delete route
        return this._http.delete(this.url+'/education/'+id,  {headers: headers})
    }


    // Ajax request TODO: TEST: dELETE THIS METHOD, 
    addUser(user): Observable<any> {
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'api/users', params, {headers: headers});
    }


}