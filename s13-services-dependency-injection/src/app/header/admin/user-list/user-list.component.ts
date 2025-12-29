import { Component, inject } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  private userService = inject(UserService);
  users: User[] = this.userService.GetAllUsers();

  ShowUserDetails(user: User) {
    this.userService.OnShowUserDetails(user);
  }
}
