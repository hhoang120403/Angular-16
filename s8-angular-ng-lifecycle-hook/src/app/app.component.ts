import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 's8-angular-ng-lifecycle-hook';
  inputVal: string = '';
  toDestroy = false;

  constructor() {
    console.log('AppComponent constructor called');
  }

  onBtnClicked(inputEl: HTMLInputElement) {
    this.inputVal = inputEl.value;
  }

  destroyComponent() {
    this.toDestroy = !this.toDestroy;
  }
}
