import { Todo } from '@api/common-data';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-todos-details',
  templateUrl: './todos-details.component.html',
  styleUrls: ['./todos-details.component.css']
})
export class TodosDetailsComponent {
  @Input() todoForm;

  @Output() submitTodoForm = new EventEmitter();

  submitSubmitTodoForm(todo) {
    this.submitTodoForm.emit(todo);
  }

  resetTodoForm(form) {
    form.reset();
  }
}
