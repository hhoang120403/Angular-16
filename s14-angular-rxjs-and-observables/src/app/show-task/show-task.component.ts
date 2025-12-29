import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css'],
})
export class ShowTaskComponent implements OnInit {
  tasks: string[] = [];
  private taskService = inject(TaskService);

  ngOnInit() {
    // this.taskService.createTaskEvent.subscribe((task) => {
    //   this.tasks.push(task);
    // });

    this.taskService.createTaskSubject.subscribe((task) => {
      this.tasks.push(task);
    });
  }
}
