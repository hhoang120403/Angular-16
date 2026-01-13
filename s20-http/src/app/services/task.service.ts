import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Task } from '../model/Task';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  http: HttpClient = inject(HttpClient);

  getAllTasks() {
    return this.http
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
      );
  }

  createTask(task: Task) {
    const headers = new HttpHeaders({
      'my-header': 'Hello World',
    });

    return this.http.post<{ name: string }>(
      'https://angularhttpclient-1df7a-default-rtdb.firebaseio.com/tasks.json',
      task,
      {
        headers,
      }
    );
  }

  updateTask(id: string | undefined, task: Task) {
    return this.http.put(
      'https://angularhttpclient-1df7a-default-rtdb.firebaseio.com/tasks/' +
        id +
        '.json',
      task
    );
  }

  deleteTask(id: string | undefined) {
    return this.http.delete(
      'https://angularhttpclient-1df7a-default-rtdb.firebaseio.com/tasks/' +
        id +
        '.json'
    );
  }

  deleteAllTasks() {
    return this.http.delete(
      'https://angularhttpclient-1df7a-default-rtdb.firebaseio.com/tasks.json'
    );
  }
}
