import { Injectable } from '@angular/core';
import { Config } from '../config/config';

@Injectable() 
export  class UploadService {
    public url: string;

    constructor(){
        this.url = Config.API_URL;
    }

    // ajax to upload files
    makeFileRequest(url: string, params: string[], files: File[], name: string) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            
            for(var i = 0; i < files.length; i++) {
                formData.append(name, files[i], files[i].name );
            }
            

            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if(xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        console.log('salta reject');
                        reject(xhr.response);
                    }
                }
            }

            xhr.open('POST', url, true);
            xhr.send(formData);

        });
    }
}