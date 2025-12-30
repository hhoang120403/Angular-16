import { inject, Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: Boolean = false;
  userService: UserService = inject(UserService);

  constructor() {}

  login(username: string, password: string) {
    const user = this.userService.users.find((u) => {
      return u.username === username && u.password === password;
    });

    if (user === undefined) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
    }

    return user;
  }

  logout() {
    this.isLoggedIn = false;
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
