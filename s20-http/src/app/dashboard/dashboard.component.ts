import { Component, inject } from '@angular/core';
import { Task } from '../model/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  showCreateTaskForm: boolean = false;
  http: HttpClient = inject(HttpClient);

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
}
