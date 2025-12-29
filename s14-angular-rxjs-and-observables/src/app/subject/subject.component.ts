import { Component, OnInit } from '@angular/core';
import {
  AsyncSubject,
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
  ngOnInit() {
    // let obs = new Observable((observer) => {
    //   observer.next(Math.random());
    // });
    // const subject = new ReplaySubject(2);
    // const subject = new BehaviorSubject<number>(124);
    // subject.next(263);
    // subject.next(2020);
    // subject.next(2003);
    // Subscriber 1
    // subject.subscribe((data) => {
    //   console.log('Subscriber 1:', data);
    // });
    // Subscriber 2
    // subject.subscribe((data) => {
    //   console.log('Subscriber 2:', data);
    // });
    // subject.next(2026);
    // Subscriber 3
    // subject.subscribe((data) => {
    //   console.log('Subscriber 3:', data);
    // });
    // subject.next(2025);
    // AJAX Call
    // const subject = new Subject();
    // const data = ajax('https://randomuser.me/api/');
    // subject.subscribe((res) => {
    //   console.log(res);
    // });
    // subject.subscribe((res) => {
    //   console.log(res);
    // });
    // subject.subscribe((res) => {
    //   console.log(res);
    // });
    // data.subscribe(subject);

    // Async Subject
    // const asyncSubject = new AsyncSubject();

    // asyncSubject.next(1);
    // asyncSubject.next(2);
    // asyncSubject.next(3);
    // asyncSubject.complete();

    // asyncSubject.subscribe((data) => console.log(`Subscriber 1: ${data}`));

    // Promise vs Observable
    const promise = new Promise((resolve, reject) => {
      console.log('Promise is called');
      resolve(124);
    });

    promise.then((data) => console.log(data));

    const obs = new Observable((subscriber) => {
      console.log('Observable is called');
      subscriber.next(2025);
      subscriber.next(2026);
    });

    obs.subscribe((data) => console.log(data));
  }
}
