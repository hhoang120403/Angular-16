import { Component, inject } from '@angular/core';
import { SubscribeService } from 'src/app/services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  private subscribeService = inject(SubscribeService);

  OnSubscribeClicked() {
    this.subscribeService.onSubscribeClicked('premium');
  }
}
