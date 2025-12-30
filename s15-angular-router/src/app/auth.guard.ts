import { inject } from '@angular/core';

import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CourseService } from './services/course.service';

export const CanActivate = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

export const CanActivateChild = () => {
  return CanActivate();
};

export const CanDeactivate = (component: ContactComponent) => {
  return component.canExit();
};

export const resolve = () => {
  const courseService = inject(CourseService);
  return courseService.getAllcourses();
};
