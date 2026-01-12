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
  dateOfBirth = '';
  defaultGender = 'male';

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

    this.registrationForm?.reset();

    this.registrationForm?.form.patchValue({
      gender: this.defaultGender,
      address: {
        country: 'America',
      },
    });
  }

  generateUsername() {
    let username = '';
    if (this.firstName.length >= 3) {
      username += this.firstName.slice(0, 3);
    } else {
      username += this.firstName;
    }

    if (this.lastName.length >= 3) {
      username += this.lastName.slice(0, 3);
    } else {
      username += this.lastName;
    }

    let datetime = new Date(this.dateOfBirth);
    username += datetime.getFullYear();

    username = username.toLowerCase();

    console.log(username);

    // this.registrationForm?.setValue({
    //   firstName: this.registrationForm?.value.firstName,
    //   lastName: this.registrationForm?.value.lastName,
    //   email: this.registrationForm?.value.email,
    //   dob: this.registrationForm?.value.dob,
    //   phoneNumber: this.registrationForm?.value.phoneNumber,
    //   gender: this.registrationForm?.value.gender,
    //   address: {
    //     streetAddress: this.registrationForm?.value.address.streetAddress,
    //     streetAddressLine2:
    //       this.registrationForm?.value.address.streetAddressLine2,
    //     country: this.registrationForm?.value.address.country,
    //     city: this.registrationForm?.value.address.city,
    //     region: this.registrationForm?.value.address.region,
    //     postalCode: this.registrationForm?.value.address.postalCode,
    //   },
    //   username: username,
    // });

    // patchValue: is used to update only a subset of the element of FormGroup or FormArray value
    this.registrationForm?.form.patchValue({
      username: username,
    });
  }
}
