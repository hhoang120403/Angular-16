import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('username') username: ElementRef | null = null;
  @ViewChild('password') password: ElementRef | null = null;

  private router: Router = inject(Router);
  private authService: AuthService = inject(AuthService);
  private activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe((params) => {
      if (params.get('logout')) {
        this.authService.logout();
        alert(
          'You are now logged out. IsLoggedIn = ' + this.authService.isLoggedIn
        );
        this.router.navigate(['/login']);
      }
    });
  }

  onLogin() {
    if (this.username && this.password) {
      const username = this.username.nativeElement.value;
      const password = this.password.nativeElement.value;

      const user = this.authService.login(username, password);
      if (user) {
        alert('Welcome ' + user.name + '. You are now logged in.');
        this.router.navigate(['/courses']);
      } else {
        alert('The login credentials you have entered is not correct.');
      }
    }
  }
}
