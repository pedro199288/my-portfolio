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
  public status: string;
  public messageText: string;

  constructor(
    private contactService: ContactService
  ) {
      this.contact = new Contact('', '','','','');
  }

  ngOnInit() {

  }

  onSubmit(form) {
      const formIsValid = form.form.valid;
      
      if(formIsValid) {
        this.contactService.send(this.contact).subscribe(
          result => {
            console.log(result);
            if(result.message == true) {
              this.status = 'success';
              this.messageText = 'Form sent correctly!';
            } else {
              this.status = 'error';
              this.messageText = 'Error sending the form!';
            }
          },
          error => {
            console.log(<any>error);
            this.status = 'error';
            this.messageText = 'Error sending the form!';
          }
        );
      } else {
        this.status = 'error';
        this.messageText = 'Fill the form correctly!';
      }
  }

}
