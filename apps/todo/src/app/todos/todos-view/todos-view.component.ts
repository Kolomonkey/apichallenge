import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '@api/common-data';

@Component({
  selector: 'api-todos-view',
  templateUrl: './todos-view.component.html',
  styleUrls: ['./todos-view.component.css']
})
export class TodosViewComponent {
  @Input() allTodos: Todo[];

  @Output() selectTodo = new EventEmitter();
  @Output() deleteTodo = new EventEmitter();

  submitSelectTodo(todo) {
    this.selectTodo.emit(todo);
  }

  submitDeleteTodo(id) {
    this.deleteTodo.emit(id);
  }
}
