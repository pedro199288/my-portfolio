import { Component } from '@angular/core';
import { Config } from './config/config';

console.log('API URL', Config.API_URL)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-portfolio';
}
