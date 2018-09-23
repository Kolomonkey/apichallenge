import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent {
  @Input() allUsers;
  @Output() selectUser = new EventEmitter();
  @Output() deleteUser = new EventEmitter();

  submitSelectUser(id) {
    this.selectUser.emit(id);
  }

  submitDeleteUser(user) {
    this.deleteUser.emit(user);
  }
}
