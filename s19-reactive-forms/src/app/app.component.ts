import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './validators/custom-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 's19-reactive-forms';

  reactiveForm: FormGroup | null = null;
  formStatus: string = '';

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        CustomValidators.noSpaceAllowed,
      ]),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(
        null,
        [Validators.required],
        [CustomValidators.checkUserName]
      ),
      dateOfBirth: new FormControl(null),
      gender: new FormControl('male'),
      address: new FormGroup({
        streetAddress: new FormControl(null, Validators.required),
        city: new FormControl(null),
        country: new FormControl('America', Validators.required),
        region: new FormControl(null),
        postalCode: new FormControl(null, Validators.required),
      }),
      skills: new FormArray([new FormControl(null, Validators.required)]),
      experience: new FormArray([]),
    });

    // Value changes
    // this.reactiveForm?.get('firstName')?.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    // Status changes
    // this.reactiveForm?.get('email')?.statusChanges.subscribe((value) => {
    //   console.log(value);
    // });

    // Value and status changes
    // this.reactiveForm?.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    this.reactiveForm?.statusChanges.subscribe((status) => {
      this.formStatus = status;
    });
  }

  get skills(): FormArray<FormControl> {
    return this.reactiveForm?.get('skills') as FormArray<FormControl>;
  }

  get experience(): FormArray<FormControl> {
    return this.reactiveForm?.get('experience') as FormArray<FormControl>;
  }

  onFormSubmit() {
    console.log(this.reactiveForm);
  }

  addSkills() {
    (<FormArray>this.reactiveForm?.get('skills')).push(
      new FormControl(null, Validators.required)
    );
  }

  onDeleteSkill(index: number) {
    const controls = this.skills;
    controls.removeAt(index);
  }

  addExperience() {
    const fGroup = new FormGroup({
      companyName: new FormControl(null),
      position: new FormControl(null),
      totalExperience: new FormControl(null),
      startDate: new FormControl(null),
      endDate: new FormControl(null),
    });

    (<FormArray>this.reactiveForm?.get('experience')).push(fGroup);
  }

  onDeleteExperience(index: number) {
    const fArray = this.experience;
    fArray.removeAt(index);
  }

  generateUsername() {
    let username = '';
    const fName: string = this.reactiveForm?.get('firstName')?.value;
    const lName: string = this.reactiveForm?.get('lastName')?.value;
    const dob: string = this.reactiveForm?.get('dateOfBirth')?.value;

    if (fName.length >= 3) {
      username += fName.substring(0, 3);
    } else {
      username += fName;
    }

    if (lName.length >= 3) {
      username += lName.substring(0, 3);
    } else {
      username += lName;
    }

    let dateOfBirth = new Date(dob);
    username += dateOfBirth.getFullYear();

    username = username.toLowerCase();

    // this.reactiveForm?.get('username')?.setValue(username);

    this.reactiveForm?.get('username')?.patchValue(username);
  }
}
