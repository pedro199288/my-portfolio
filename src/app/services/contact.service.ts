// Service for contact

// imports
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from '../config/config';
import { Contact } from '../models/Contact';

@Injectable()
export class ContactService{
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = Config.API_URL;
    }

    // Saves  document
    send(contact: Contact): Observable<any> {
        console.log(contact);
        let params = JSON.stringify(contact);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        // call the api save route
        return this._http.post(this.url+'/send', params, {headers: headers});
    }

    // Saves  document
    save(contact: Contact): Observable<any> {
        let params = JSON.stringify(contact);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        // call the api save route
        return this._http.post(this.url+'/contact/save', params, {headers: headers});
    }

    // Updates  document
    update(contact: Contact): Observable<any> {
        console.log(contact);
        let params = JSON.stringify(contact);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        // call the api update route
        return this._http.put(this.url+'/contact/'+contact._id, params, {headers: headers});
    }


}