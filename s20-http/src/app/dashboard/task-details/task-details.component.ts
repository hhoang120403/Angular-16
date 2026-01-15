import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/model/Task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent {
  @Output() CloseDetailView: EventEmitter<void> = new EventEmitter<void>();

  @Input() selectedTask: Task | undefined;

  OnCloseDetailViewEvent() {
    this.CloseDetailView.emit();
  }
}
