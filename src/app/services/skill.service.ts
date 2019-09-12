// Service for skill

// imports
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../config/config';
import { Skill } from '../models/Skill';

@Injectable()
export class SkillService{
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = Config.API_URL;
    }

    getAll(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url+'/skill/all');
    }

    getOneById(id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url+'/skill/'+id);
    }

    // Saves  document
    save(skill: Skill): Observable<any> {
        let params = JSON.stringify(skill);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        // call the api save route
        return this._http.post(this.url+'/skill/save', params, {headers: headers});
    }

    // Updates  document
    update(skill: Skill): Observable<any> {
        console.log(skill);
        let params = JSON.stringify(skill);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        // call the api update route
        return this._http.put(this.url+'/skill/'+skill._id, params, {headers: headers});
    }

    // Deletes  document
    delete(id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        // call the api delete route
        return this._http.delete(this.url+'/skill/'+id,  {headers: headers})
    }


    // Ajax request TODO: TEST: dELETE THIS METHOD, 
    addUser(user): Observable<any> {
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'api/users', params, {headers: headers});
    }


}