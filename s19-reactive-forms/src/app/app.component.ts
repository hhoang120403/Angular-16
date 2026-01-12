import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null),
      dateOfBirth: new FormControl(null),
      gender: new FormControl('male'),
      address: new FormGroup({
        streetAddress: new FormControl(null, Validators.required),
        city: new FormControl(null),
        country: new FormControl('America', Validators.required),
        region: new FormControl(null),
        postalCode: new FormControl(null, Validators.required),
      }),
    });
  }

  onFormSubmit() {
    console.log(this.reactiveForm);
  }
}
