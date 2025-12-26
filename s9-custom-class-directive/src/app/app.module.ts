import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClassDirective } from './custom-directives/class.directive';
import { StyleDirective } from './custom-directives/style.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClassDirective,
    StyleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
