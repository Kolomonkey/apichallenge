import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent {
  @Input() selectedUser;
  @Input() userForm;

  @Output() submitUserForm = new EventEmitter();
  @Output() resetSelectedUser = new EventEmitter();

  submitSubmitUserForm(user) {
    this.submitUserForm.emit(user);
  }

  resetUserForm(form) {
    form.reset();
    this.resetSelectedUser.emit();
  }
}
