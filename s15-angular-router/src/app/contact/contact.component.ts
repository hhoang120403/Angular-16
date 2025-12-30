import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  firstName: string = '';
  lastName: string = '';
  country: string = 'vn';
  message: string = '';

  isSubmitted: boolean = false;

  onSubmit() {
    this.isSubmitted = true;
  }

  canExit() {
    if (
      (this.firstName || this.lastName || this.message) &&
      !this.isSubmitted
    ) {
      return confirm('Are you sure you want to exit?');
    }
    return true;
  }
}
