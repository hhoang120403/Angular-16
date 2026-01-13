import { Component, inject, OnInit } from '@angular/core';
import { Task } from '../model/Task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  showCreateTaskForm: boolean = false;
  taskService: TaskService = inject(TaskService);
  allTasks: Task[] = [];

  ngOnInit(): void {
    this.FetchAllTasks();
  }

  OpenCreateTaskForm() {
    this.showCreateTaskForm = true;
  }

  CloseCreateTaskForm() {
    this.showCreateTaskForm = false;
  }

  AddNewTask(task: Task) {
    this.taskService.createTask(task).subscribe({
      next: () => this.FetchAllTasks(),
    });
  }

  DeleteTask(id: string | undefined) {
    this.taskService.deleteTask(id).subscribe({
      next: () => this.FetchAllTasks(),
    });
  }

  ClearAllTasks() {
    this.taskService.deleteAllTasks().subscribe({
      next: () => (this.allTasks = []),
    });
  }

  FetchAllTasks() {
    this.taskService.getAllTasks().subscribe((tasks) => {
      this.allTasks = tasks;
    });
  }
}
