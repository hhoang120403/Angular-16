import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../Models/course';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  private activeRoute: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  course: Course | null = null;

  ngOnInit(): void {
    this.course = history.state;
  }
}
