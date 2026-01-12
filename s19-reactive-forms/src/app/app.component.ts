import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 's19-reactive-forms';

  reactiveForm: FormGroup | null = null;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      email: new FormControl(null),
      username: new FormControl(null),
      dateOfBirth: new FormControl(null),
      gender: new FormControl('male'),
      streetAddress: new FormControl(null),
      city: new FormControl(null),
      country: new FormControl('America'),
      region: new FormControl(null),
      postalCode: new FormControl(null),
    });
  }

  onFormSubmit() {
    console.log(this.reactiveForm);
  }
}
