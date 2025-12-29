import { Component, inject, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  private userService = inject(UserService);
  selectedUser: User | null = null;

  ngOnInit(): void {
    this.userService.OnUserDetailsClicked.subscribe((user: User) => {
      this.selectedUser = user;
    });
  }
}
