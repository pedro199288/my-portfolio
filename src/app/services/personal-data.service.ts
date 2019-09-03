// Sercice for personalData

// imports
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../config/config';

@Injectable()
export class PersonalDataService{
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = Config.API_URL;
    }

    getAll(): Observable<any> {
        return this._http.get(this.url+'personal-data/all');
    }

    // Ajax request TODO: TEST: dELETE THIS METHOD, 
    addUser(user): Observable<any> {
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'api/users', params, {headers: headers});
    }

}