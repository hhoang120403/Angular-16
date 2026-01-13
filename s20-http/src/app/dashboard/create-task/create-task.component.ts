import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/model/Task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements AfterViewInit {
  @Input() isEditMode: boolean = false;

  @Input() selectedTask: Task | undefined;

  @ViewChild('taskForm') taskForm: NgForm | undefined;

  @Output() CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() EmitTaskData: EventEmitter<Task> = new EventEmitter<Task>();

  OnCloseForm() {
    this.CloseForm.emit(false);
  }

  onSubmitForm(taskForm: NgForm) {
    this.EmitTaskData.emit(taskForm.value);
    this.CloseForm.emit(false);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (!this.taskForm || !this.selectedTask) {
        return;
      }
      this.taskForm.form.patchValue(this.selectedTask);
    }, 0);
  }
}
