import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 's3-angular-view-children';

  fullName: string = '';
  @ViewChildren('inputEl', {}) inputElements: QueryList<ElementRef> | undefined;

  show() {
    let name = '';
    this.inputElements?.forEach((el) => {
      name += el.nativeElement.value + ' ';
    });
    this.fullName = name.trim();
  }
}
