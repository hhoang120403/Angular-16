import { Component, inject } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';

  private userService = inject(UserService);

  createNewUser() {
    if (!this.name) {
      alert('Please enter a name');
      return;
    }
    let newUser = new User(this.name, this.gender, this.subType, this.status);

    this.userService.CreateUser(newUser);

    console.log(this.userService.GetAllUsers());
  }
}
