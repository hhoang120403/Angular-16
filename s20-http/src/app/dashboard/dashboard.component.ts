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
  editMode: boolean = false;
  selectedTask: Task | undefined;
  currentTaskId: string | undefined;
  isLoading: boolean = false;

  ngOnInit(): void {
    this.FetchAllTasks();
  }

  OpenCreateTaskForm() {
    this.editMode = false;
    this.showCreateTaskForm = true;
    this.selectedTask = {
      title: '',
      desc: '',
      assignedTo: '',
      createdAt: '',
      priority: '',
      status: '',
    };
  }

  CloseCreateTaskForm() {
    this.showCreateTaskForm = false;
  }

  CreateOrUpdateTask(task: Task) {
    if (this.editMode) {
      this.taskService.updateTask(this.currentTaskId, task).subscribe({
        next: () => this.FetchAllTasks(),
      });
    } else {
      this.taskService.createTask(task).subscribe({
        next: () => this.FetchAllTasks(),
      });
    }
  }

  EditTask(id: string | undefined) {
    this.currentTaskId = id;
    this.editMode = true;
    this.showCreateTaskForm = true;
    this.selectedTask = this.allTasks.find((task) => task.id === id);
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
    this.isLoading = true;
    this.taskService.getAllTasks().subscribe((tasks) => {
      this.allTasks = tasks;
      this.isLoading = false;
    });
  }
}
