// Service for experience

// imports
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../config/config';
import { Experience } from '../models/Experience';

@Injectable()
export class ExperienceService{
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = Config.API_URL;
    }

    getAll(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url+'/experience/all');
    }

    getOneById(id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url+'/experience/'+id);
    }

    // Saves  document
    save(experience: Experience): Observable<any> {
        let params = JSON.stringify(experience);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        // call the api save route
        return this._http.post(this.url+'/experience/save', params, {headers: headers});
    }

    // Updates  document
    update(experience: Experience): Observable<any> {
        console.log(experience);
        let params = JSON.stringify(experience);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        // call the api update route
        return this._http.put(this.url+'/experience/'+experience._id, params, {headers: headers});
    }

    // Deletes  document
    delete(id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        // call the api delete route
        return this._http.delete(this.url+'/experience/'+id,  {headers: headers})
    }


    // Ajax request TODO: TEST: dELETE THIS METHOD, 
    addUser(user): Observable<any> {
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'api/users', params, {headers: headers});
    }


}