import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { PopularComponent } from './home/popular/popular.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  resolve,
} from './auth.guard';

// Define Route
const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'contact',
    component: ContactComponent,
    canDeactivate: [CanDeactivate],
  },
  { path: 'about', component: AboutComponent },
  {
    path: 'courses',
    component: CoursesComponent,
    resolve: { courses: resolve },
  },
  // { path: 'courses/course/:id', component: CourseDetailComponent },
  {
    path: 'courses',
    canActivateChild: [CanActivateChild],
    children: [
      { path: 'course/:id', component: CourseDetailComponent },
      { path: 'popular', component: PopularComponent },
      {
        path: 'checkout',
        component: CheckoutComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class RoutingModule {}
