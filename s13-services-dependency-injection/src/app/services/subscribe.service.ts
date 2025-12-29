import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubscribeService {
  constructor() {}

  onSubscribeClicked(type: string) {
    // Add user to database
    // Send email with subscription details
    // Allow user to access the services

    alert('SubscribeService constructor called with type:' + type);
  }
}
