import { Component, inject, OnInit } from '@angular/core';
import { Task } from '../model/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  showCreateTaskForm: boolean = false;
  http: HttpClient = inject(HttpClient);

  ngOnInit(): void {
    this.fetchAllTaks();
  }

  OpenCreateTaskForm() {
    this.showCreateTaskForm = true;
  }

  CloseCreateTaskForm() {
    this.showCreateTaskForm = false;
  }

  AddNewTask(task: Task) {
    const headers = new HttpHeaders({
      'my-header': 'Hello World',
    });
    this.http
      .post<{ name: string }>(
        'https://angularhttpclient-1df7a-default-rtdb.firebaseio.com/tasks.json',
        task,
        {
          headers,
        }
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  private fetchAllTaks() {
    this.http
      .get<{ [key: string]: Task }>(
        'https://angularhttpclient-1df7a-default-rtdb.firebaseio.com/tasks.json'
      )
      .pipe(
        map((res) => {
          // Transform Data
          let tasks = [];
          for (let key in res) {
            if (res.hasOwnProperty(key)) {
              tasks.push({ ...res[key], id: key });
            }
          }
          return tasks;
        })
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
