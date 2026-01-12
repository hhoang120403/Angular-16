import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 's18-template-driven-form';

  firstName = '';
  lastName = '';
  emailAddress = '';

  @ViewChild('registrationForm') registrationForm: NgForm | undefined;

  genders = [
    { id: 'check-male', value: 'male', display: 'Male' },
    { id: 'check-female', value: 'female', display: 'Female' },
    { id: 'check-other', value: 'other', display: 'Prefer not to say' },
  ];

  onFormSubmit() {
    console.log(this.registrationForm);
    // console.log(this.registrationForm?.value.firstName);
    console.log(this.registrationForm?.controls['firstName'].value);
    console.log(this.registrationForm?.value.lastName);
    console.log(this.registrationForm?.value.email);
  }
}
