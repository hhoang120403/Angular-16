import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent {
  mainMenuItems: string[] = [
    'Home',
    'Products',
    'Sale',
    'New Arrivals',
    'Contact',
    'Services',
  ];
}
