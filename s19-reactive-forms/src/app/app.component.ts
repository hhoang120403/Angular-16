import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
      skills: new FormArray([new FormControl(null, Validators.required)]),
      experience: new FormArray([]),
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
}
