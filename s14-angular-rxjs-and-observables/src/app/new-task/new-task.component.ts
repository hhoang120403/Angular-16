import { Component, inject } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent {
  newTask: string = '';
  private taskService = inject(TaskService);

  createTask() {
    if (this.newTask.trim() !== '') {
      this.taskService.OnCreateTask(this.newTask);
    }
  }
}
