import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { selectAllTodos, selectCurrectTodo } from '..';
import { TodosActionTypes } from './todo.actions';
import * as TodosAction from './todo.actions';
import { TodosState } from './todo.reducer';

@Injectable()
export class TodosFacade {
  allTodos$ = this.store.pipe(select(selectAllTodos));
  currentTodo$ = this.store.pipe(select(selectCurrectTodo));

  constructor(private store: Store<TodosState>) {}

  loadAll() {
    this.store.dispatch(new TodosAction.LoadTodos());
  }

  selectTodo(todo) {
    this.store.dispatch(new TodosAction.TodoSelected(todo));
  }

  createTodo(todo) {
    this.store.dispatch(new TodosAction.CreateTodo(todo));
  }

  updateTodo(todo) {
    this.store.dispatch(new TodosAction.UpdateTodo(todo));
  }

  deleteTodo(todo) {
    this.store.dispatch(new TodosAction.DeleteTodo(todo));
  }
}
