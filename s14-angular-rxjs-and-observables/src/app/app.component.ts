import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { filter, from, fromEvent, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 's14-angular-rxjs-and-observables';

  data: any[] = [];

  @ViewChild('createBtn') createBtn: ElementRef | null = null;

  createObservable: Observable<any> | null = null;

  array1 = [1, 3, 5, 7, 9];
  array2 = ['A', 'B', 'C', 'D'];

  // 1. Create an Observable
  // myObservable = new Observable((observer) => {
  //   setTimeout(() => {
  //     observer.next(1);
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next(2);
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next(3);
  //   }, 3000);
  //   // setTimeout(() => {
  //   //   observer.error(new Error('Error in Observable'));
  //   // }, 3000);
  //   setTimeout(() => {
  //     observer.next(4);
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next(5);
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 6000);
  // });

  // myObservable = of(this.array1, this.array2);

  promiseData = new Promise((resolve, reject) => {
    resolve([10, 20, 30, 40, 50]);
  });

  // myObservable = from(this.promiseData);

  // myObservable = from(this.array1);

  myObservable = from([2, 4, 6, 8, 10]).pipe(
    map((val) => {
      return val * 5;
    }),
    filter((val) => {
      return val > 20;
    })
  );

  // transformData = this.myObservable.pipe(
  //   map((val) => {
  //     return val * 5;
  //   }),
  //   filter((val) => {
  //     return val % 4 === 0;
  //   })
  // );

  // filteredData = this.transformData.pipe(
  //   filter((val) => {
  //     return val > 20;
  //   })
  // );

  // 2. Subscribe to the Observable
  getAsyncData() {
    // this.myObservable.subscribe(
    //   (x: any) => {
    //     // next, error, complete
    //     this.data.push(x);
    //   },
    //   (error: any) => {
    //     alert(error.message);
    //   },
    //   () => {
    //     alert('Observable completed');
    //   }
    // );

    this.myObservable.subscribe({
      next: (x: any) => {
        this.data.push(x);
      },
      error: (error: any) => {
        alert(error.message);
      },
      complete: () => {
        alert('Observable completed');
      },
    });
  }

  // buttonClicked() {
  //   let count = 0;
  //   this.createObservable = fromEvent(this.createBtn?.nativeElement, 'click');
  //   this.createObservable.subscribe({
  //     next: (data: any) => {
  //       console.log(data);
  //       this.showItem(count++);
  //     },
  //   });
  // }

  // showItem(count: number) {
  //   let div = document.createElement('div');
  //   div.innerHTML = 'New Item ' + count;
  //   document.getElementById('container')?.appendChild(div);
  // }

  ngAfterViewInit() {
    // this.buttonClicked();
  }
}
