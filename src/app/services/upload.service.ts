import { Injectable } from '@angular/core';
import { Config } from '../config/config';
import { HttpClient } from '@angular/common/http';

@Injectable() 
export  class UploadService {
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        
    }

    // ajax to upload files
    makeFileRequest(url: string, params: string[], files: File[], name: string) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            // var xhr = new XMLHttpRequest();
            
            for(var i = 0; i < files.length; i++) {
                formData.append(name, files[i], files[i].name );
            }

            // sends the formData object to the url specified
            this._http.post(url, formData).subscribe(
                res => {
                    resolve(res);
                },
                error => {
                    reject(error);
                }
            )

        });
    }
}