import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  coursesService = inject(CourseService);
  router: Router = inject(Router);

  AllCourses: Course[] = [];
  searchString: string | null = null;

  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe((params) => {
      this.searchString = params.get('search');
      if (
        this.searchString === undefined ||
        this.searchString === '' ||
        this.searchString === null
      ) {
        // this.coursesService.getAllcourses().subscribe((courses) => {
        //   this.AllCourses = courses;
        // });

        this.AllCourses = this.activeRoute.snapshot.data['courses'];
      } else {
        this.AllCourses = this.coursesService.courses.filter((course) =>
          course.title.toLowerCase().includes(this.searchString!.toLowerCase())
        );
      }
    });
  }

  // TODO
  goToCourseDetails(id: number) {
    this.router.navigate(['courses', 'course', id]);
  }
}
