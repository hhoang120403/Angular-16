import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css'],
})
export class ConfirmDeleteComponent implements OnInit {
  @Input() userToDelete: User | null = null;

  @Output() confirmDelete = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  onConfirmDelete(value: boolean) {
    this.confirmDelete.emit(value);
  }
}
