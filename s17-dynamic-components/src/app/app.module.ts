import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ConfirmDeleteComponent } from './users/confirm-delete/confirm-delete.component';
import { ViewContainerDirective } from './viewContainer.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ConfirmDeleteComponent,
    ViewContainerDirective,
  ],
  imports: [BrowserModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
