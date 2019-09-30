// Service for personalData

// imports
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../config/config';
import { PersonalData } from '../models/PersonalData';

@Injectable()
export class PersonalDataService{
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = Config.API_URL;
    }

    getAll(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url+'/personal-data/all');
    }

    getOneById(id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url+'/personal-data/'+id);
    }

    // Saves  document
    save(personalData: PersonalData): Observable<any> {
        let params = JSON.stringify(personalData);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        // call the api save route
        return this._http.post(this.url+'/personal-data/save', params, {headers: headers});
    }

    // Updates  document
    update(personalData: PersonalData): Observable<any> {
        let params = JSON.stringify(personalData);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        // call the api update route
        return this._http.put(this.url+'/personal-data/'+personalData._id, params, {headers: headers});
    }

    // Deletes  document
    delete(id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        // call the api delete route
        return this._http.delete(this.url+'/personal-data/'+id,  {headers: headers})
    }


    // Ajax request TODO: TEST: dELETE THIS METHOD, 
    addUser(user): Observable<any> {
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'api/users', params, {headers: headers});
    }


}