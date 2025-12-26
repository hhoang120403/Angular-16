import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 's10-custom-structural-directive';

  display = false;

  displayTermsOfServices() {
    this.display = !this.display;
  }
}
