// Exporting the development environment config to use anywhere in the project.
import { environment } from './../../environments/environment';
import { environmentProd } from './../../environments/environment.prod';
import { isDevMode } from '@angular/core';


// DevConfig
export const Config = {
    API_URL: isDevMode() ? environment.API_URL : environmentProd.API_URL
}
