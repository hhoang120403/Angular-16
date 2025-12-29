import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // createTaskEvent: EventEmitter<string> = new EventEmitter<string>();

  createTaskSubject = new Subject<string>();

  OnCreateTask(task: string) {
    // this.createTaskEvent.emit(task);
    this.createTaskSubject.next(task);
  }
}
