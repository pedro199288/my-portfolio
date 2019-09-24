import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/Contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {
  public contact: Contact;

  constructor(
    private contactService: ContactService
  ) {
      this.contact = new Contact('', '','','','');
  }

  ngOnInit() {

  }

  onSubmit(form) {
      const formIsValid = form.form.valid;
      console.log(formIsValid); // Returns true or false depending on the form validity, TODO: use this to print a error message 
      if(formIsValid) {
        this.contactService.send(this.contact).subscribe(
          result => {
            console.log(result);
          },
          error => {
            console.log(<any>error);
          }
        );
      }
  }

}
