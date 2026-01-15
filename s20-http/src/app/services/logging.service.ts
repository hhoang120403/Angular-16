import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  http: HttpClient = inject(HttpClient);

  logError(data: {
    statusCode: number;
    errorMessage: string;
    timestamp: Date;
  }) {
    this.http
      .post(
        'https://angularhttpclient-1df7a-default-rtdb.firebaseio.com/logs.json',
        data
      )
      .subscribe();
  }

  fetchErrors() {
    this.http
      .get(
        'https://angularhttpclient-1df7a-default-rtdb.firebaseio.com/logs.json'
      )
      .subscribe((res) => console.log(res));
  }
}
