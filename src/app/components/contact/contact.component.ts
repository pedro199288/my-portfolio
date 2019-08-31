import { Component, OnInit } from '@angular/core';
import { ContactMessage } from './../../models/ContactMessage';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactMessage: ContactMessage;

  constructor() {
      this.contactMessage = new ContactMessage('','','','');
  }

  ngOnInit() {

  }

  onSubmit(form) {
      console.log(form.form.valid); // Returns true or false depending on the form validity, TODO: use this to print a error message 
      console.log('submit event triggered');
      console.log(this.contactMessage);
  }

}
