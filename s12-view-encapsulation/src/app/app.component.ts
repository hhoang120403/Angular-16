import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //encapsulation: ViewEncapsulation.None, // None: không sử dụng encapsulation, các styles sẽ được áp dụng cho toàn bộ thằng component con
})
export class AppComponent {
  title = 's12-view-encapsulation';
}
