import { EventEmitter, inject, Injectable } from '@angular/core';
import { User } from '../models/User';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private loggerService = inject(LoggerService);

  users: User[] = [
    new User('Cristiano Ronaldo', 'Male', 'Yearly', 'Active'),
    new User('Mark Zuckerberg', 'Female', 'Monthly', 'Inactive'),
  ];

  OnUserDetailsClicked: EventEmitter<User> = new EventEmitter<User>();

  constructor() {}

  GetAllUsers(): User[] {
    return this.users;
  }

  CreateUser(user: User): void {
    this.users.push(user);

    this.loggerService.LogMesage(user.name, user.status);
  }

  OnShowUserDetails(user: User): void {
    this.OnUserDetailsClicked.emit(user);
  }
}
