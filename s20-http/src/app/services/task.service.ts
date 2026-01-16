import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Task } from '../model/Task';
import { catchError, map, Subject, tap, throwError } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  http: HttpClient = inject(HttpClient);
  loggingService: LoggingService = inject(LoggingService);
  errorSubject = new Subject<HttpErrorResponse>();

  getAllTasks() {
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    });

    // let queryParams = new HttpParams();
    // queryParams = queryParams.set('page', '2');
    // queryParams = queryParams.set('item', '10');

    return this.http
      .get<{ [key: string]: Task }>(
        'https://angularhttpclient-1df7a-default-rtdb.firebaseio.com/tasks.json',
        {
          headers,
          // params: queryParams,
          observe: 'body',
        }
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
        }),
        catchError((err) => {
          // Write logic to log errors
          this.loggingService.logError({
            statusCode: err.status,
            errorMessage: err.message,
            timestamp: new Date(),
          });

          return throwError(() => err);
        })
      );
  }

  createTask(task: Task) {
    const headers = new HttpHeaders({
      'my-header': 'Hello World',
    });

    return this.http
      .post<{ name: string }>(
        'https://angularhttpclient-1df7a-default-rtdb.firebaseio.com/tasks.json',
        task,
        {
          headers,
        }
      )
      .pipe(
        catchError((err) => {
          // Write logic to log errors
          this.loggingService.logError({
            statusCode: err.status,
            errorMessage: err.message,
            timestamp: new Date(),
          });

          return throwError(() => err);
        })
      )
      .subscribe({
        next: (res) => {},
        error: (err) => {
          this.errorSubject.next(err);
        },
      });
  }

  updateTask(id: string | undefined, task: Task) {
    return this.http
      .put(
        'https://angularhttpclient-1df7a-default-rtdb.firebaseio.com/tasks/' +
          id +
          '.json',
        task
      )
      .pipe(
        catchError((err) => {
          // Write logic to log errors
          this.loggingService.logError({
            statusCode: err.status,
            errorMessage: err.message,
            timestamp: new Date(),
          });

          return throwError(() => err);
        })
      )
      .subscribe({
        next: (res) => {},
        error: (err) => {
          this.errorSubject.next(err);
        },
      });
  }

  deleteTask(id: string | undefined) {
    return this.http
      .delete(
        'https://angularhttpclient-1df7a-default-rtdb.firebaseio.com/tasks/' +
          id +
          '.json'
      )
      .pipe(
        catchError((err) => {
          // Write logic to log errors
          this.loggingService.logError({
            statusCode: err.status,
            errorMessage: err.message,
            timestamp: new Date(),
          });

          return throwError(() => err);
        })
      )
      .subscribe({
        next: (res) => {},
        error: (err) => {
          this.errorSubject.next(err);
        },
      });
  }

  deleteAllTasks() {
    return this.http
      .delete(
        'https://angularhttpclient-1df7a-default-rtdb.firebaseio.com/tasks.json',
        {
          observe: 'events',
        }
      )
      .pipe(
        tap((event) => {
          if (event.type === HttpEventType.Response) {
            console.log(event);
          }
        }),
        catchError((err) => {
          // Write logic to log errors
          this.loggingService.logError({
            statusCode: err.status,
            errorMessage: err.message,
            timestamp: new Date(),
          });

          return throwError(() => err);
        })
      )
      .subscribe({
        next: (res) => {},
        error: (err) => {
          this.errorSubject.next(err);
        },
      });
  }

  getTaskDetails(id: string | undefined) {
    return this.http
      .get<Task>(
        'https://angularhttpclient-1df7a-default-rtdb.firebaseio.com/tasks/' +
          id +
          '.json'
      )
      .pipe(
        map((res) => {
          return { ...res, id };
        }),
        catchError((err) => {
          // Write logic to log errors
          this.loggingService.logError({
            statusCode: err.status,
            errorMessage: err.message,
            timestamp: new Date(),
          });

          return throwError(() => err);
        })
      );
  }
}
