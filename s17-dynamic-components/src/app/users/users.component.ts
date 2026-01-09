import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/User';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { ViewContainerDirective } from '../viewContainer.directive';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(
    private userService: UserService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  users: User[] = [];
  showConfirmDeleteComponent: boolean = false;
  userToDelete: User | null = null;
  onConfirmObs: Subscription | null = null;

  @ViewChild(ViewContainerDirective) container!: ViewContainerDirective;

  ngOnInit() {
    this.users = this.userService.users;
  }

  onDeleteClicked(user: User) {
    // this.userToDelete = user;
    // this.showConfirmDeleteComponent = true;

    this.userToDelete = user;
    this.showConfirmDelete(this.userToDelete);
  }

  onConfirmDelete(value: boolean) {
    if (value) {
      let index = this.userService.users.indexOf(this.userToDelete!);
      if (index !== -1) {
        this.userService.users.splice(index, 1);
      }
    }
    this.showConfirmDeleteComponent = false;
    this.userToDelete = null;
  }

  showConfirmDelete(user: User) {
    // 1. Create an instance of the component
    let componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        ConfirmDeleteComponent
      );

    const containerViewRef = this.container.viewContainerRef;
    containerViewRef.clear();

    // 2. Add the component to the view
    const componentRef = containerViewRef.createComponent(componentFactory);
    componentRef.instance.userToDelete = user;
    this.onConfirmObs = componentRef.instance.confirmDelete.subscribe(
      (value: boolean) => {
        this.onConfirmObs?.unsubscribe();
        containerViewRef.clear();

        if (value) {
          let index = this.userService.users.indexOf(this.userToDelete!);
          if (index !== -1) {
            this.userService.users.splice(index, 1);
          }
        }
      }
    );
  }
}
