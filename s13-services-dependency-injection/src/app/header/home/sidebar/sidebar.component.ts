import { Component, inject } from '@angular/core';
import { SubscribeService } from 'src/app/services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  private subscribeService = inject(SubscribeService);

  OnSubscribeClicked() {
    this.subscribeService.onSubscribeClicked('VIP');
  }
}
