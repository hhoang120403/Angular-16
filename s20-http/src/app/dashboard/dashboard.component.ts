import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Task } from '../model/Task';
import { TaskService } from '../services/task.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  showCreateTaskForm: boolean = false;
  showTaskDetails: boolean = false;
  taskService: TaskService = inject(TaskService);
  allTasks: Task[] = [];
  editMode: boolean = false;
  selectedTask: Task | undefined;
  currentTaskId: string | undefined;
  isLoading: boolean = false;
  errorMessage: string | null = null;

  errorSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.FetchAllTasks();
    this.errorSubscription = this.taskService.errorSubject.subscribe({
      next: (err) => this.setErrorMessage(err),
    });
  }

  ngOnDestroy(): void {
    this.errorSubscription?.unsubscribe();
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
      this.taskService.updateTask(this.currentTaskId, task);
    } else {
      this.taskService.createTask(task);
    }
  }

  EditTask(id: string | undefined) {
    this.currentTaskId = id;
    this.editMode = true;
    this.showCreateTaskForm = true;
    this.selectedTask = this.allTasks.find((task) => task.id === id);
  }

  DeleteTask(id: string | undefined) {
    this.taskService.deleteTask(id);
  }

  ClearAllTasks() {
    this.taskService.deleteAllTasks();
  }

  FetchAllTasks() {
    this.isLoading = true;
    this.taskService.getAllTasks().subscribe({
      next: (tasks) => {
        this.allTasks = tasks;
        this.isLoading = false;
      },
      error: (err) => {
        this.setErrorMessage(err);
        this.isLoading = false;
      },
    });
  }

  ShowTaskDetails(id: string | undefined) {
    this.showTaskDetails = true;
    this.taskService.getTaskDetails(id).subscribe({
      next: (task) => {
        this.selectedTask = task;
      },
      error: (err) => {
        this.setErrorMessage(err);
      },
    });
  }

  OnCloseDetailViewEvent() {
    this.showTaskDetails = false;
  }

  private setErrorMessage(err: HttpErrorResponse) {
    if (err.error.error === 'Permission denied') {
      this.errorMessage = 'You do not have permission to perform this action.';
    } else {
      this.errorMessage = err.message;
    }

    setTimeout(() => (this.errorMessage = null), 3000);
  }
}
