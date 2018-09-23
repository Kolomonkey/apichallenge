import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'api-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  allUsers = null;
  selectedUser: any = {
    titleName: '',
    firstName: '',
    lastName: '',
    email: '',
    cell: ''
  };
  userForm: FormGroup;

  constructor(private api: ApiService, private fb: FormBuilder) {}

  ngOnInit() {
    this.getAllUsers();
    this.initUserForm();
  }

  initUserForm() {
    this.userForm = this.fb.group({
      titleName: '',
      firstName: '',
      lastName: '',
      email: '',
      cell: ''
    });
  }

  patchUserForm(user) {
    this.userForm.patchValue(user);
  }

  deleteUser(user) {
    console.log(`DELETE CHARACTER: ${user.name.first}`);
  }

  submitUserForm(user) {
    console.log(`SUBMITTED FORM: ${user.firstName}`);
  }

  resetSelectedUser() {
    this.selectedUser = {
      titleName: '',
      firstName: '',
      lastName: '',
      email: '',
      cell: ''
    };
  }

  getAllUsers() {
    this.api.getUsers().subscribe(res => (this.allUsers = res));
  }

  selectUser(user) {
    (this.selectedUser = {
      titleName: user.name.title,
      firstName: user.name.first,
      lastName: user.name.last,
      email: user.email,
      cell: user.cell
    }),
      this.patchUserForm({
        titleName: user.name.title,
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        cell: user.cell
      });
  }
}
