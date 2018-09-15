import { Component, OnInit } from '@angular/core';
import { TodosFacade, Todo } from '@api/common-data';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'api-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]> = this.todosFacade.allTodos$;
  currentTodo$: Observable<Todo> = this.todosFacade.currentTodo$;
  todoForm: FormGroup;

  constructor(private todosFacade: TodosFacade, private fb: FormBuilder) {}

  ngOnInit() {
    this.getTodos();
    this.initForm();
  }

  initForm() {
    this.todoForm = this.fb.group({
      id: [null],
      date: ['', Validators.required],
      important: [null, Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  patchForm(todo) {
    this.todoForm.patchValue(todo);
  }

  submitTodoForm(todo) {
    if (!todo.id) {
      this.createTodo(todo);
    } else {
      this.updateTodo(todo);
    }
  }

  // NGRX Get/Select/CRUD
  getTodos() {
    this.todosFacade.loadAll();
  }

  selectTodo(todo) {
    this.todosFacade.selectTodo(todo);
  }

  createTodo(todo) {
    this.todosFacade.createTodo(todo);
  }

  updateTodo(todo) {
    this.todosFacade.updateTodo(todo);
  }

  deleteTodo(id) {
    this.todosFacade.deleteTodo(id);
  }
}
