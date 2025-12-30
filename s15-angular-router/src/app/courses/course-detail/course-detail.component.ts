import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  selectedCourse: Course | undefined;
  courseId: number | undefined;

  private courseService = inject(CourseService);
  activeRoute = inject(ActivatedRoute);
  paramObs: Subscription | undefined;

  ngOnInit(): void {
    // this.courseId = Number(this.activeRoute.snapshot.params['id']);
    // this.courseId = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.paramObs = this.activeRoute.paramMap.subscribe((params) => {
      this.courseId = Number(params.get('id'));
      this.selectedCourse = this.courseService.courses.find(
        (course) => course.id === this.courseId
      );
    });
  }

  ngOnDestroy(): void {
    this.paramObs?.unsubscribe();
  }
}
