import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css'],
})
export class UnsubscribeComponent {
  counter = interval(1000);
  data: number[] = [];
  subscriber1: any;

  onSubscribe() {
    this.subscriber1 = this.counter.subscribe((x) => this.data.push(x));
  }

  onUnsubscribe() {
    this.subscriber1.unsubscribe();
  }
}
