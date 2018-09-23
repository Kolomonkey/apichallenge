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
    id: null,
    name: '',
    email: '',
    gender: '',
    company: ''
  };
  userForm: FormGroup;

  constructor(private api: ApiService, private fb: FormBuilder) {}

  ngOnInit() {
    this.getAllUsers();
    this.initUserForm();
  }

  initUserForm() {
    this.userForm = this.fb.group({
      id: null,
      name: '',
      email: '',
      gender: '',
      company: ''
    });
  }

  patchUserForm(user) {
    this.userForm.patchValue(user);
  }

  deleteUser(user) {
    console.log(`DELETE CHARACTER: ${user.name}`);
  }

  submitUserForm(user) {
    if (!user.id) {
      console.log(`CREATE USER: ${user.name}`);
    } else {
      console.log(`UPDATE USER: ${user.name}`);
    }
  }

  resetSelectedUser() {
    this.selectedUser = {
      id: null,
      name: '',
      email: '',
      gender: '',
      company: ''
    };
  }

  getAllUsers() {
    this.api.getUsers().subscribe(res => (this.allUsers = res));
  }

  selectUser(user) {
    (this.selectedUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      gender: user.gender,
      company: user.company
    }),
      this.patchUserForm({
        id: user.id,
        name: user.name,
        email: user.email,
        gender: user.gender,
        company: user.company
      });
  }
}
