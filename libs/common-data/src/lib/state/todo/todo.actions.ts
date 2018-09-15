import { Todo } from './../../core/todo.model';
import { Action } from '@ngrx/store';

export enum TodosActionTypes {
  TodosAction = '[Todos] Action',
  TodoSelected = '[Todos] Selected',
  LoadTodos = '[Todos] Load Todos',
  TodosLoaded = '[Todos] Todos Loaded',
  CreateTodo = '[Todos] Create Todo',
  TodoCreated = '[Todos] Todo Created',
  UpdateTodo = '[Todos] Update Todo',
  TodoUpdated = '[Todos] Todo Updated',
  DeleteTodo = '[Todos] Delete Todo',
  TodoDeleted = '[Todos] Todo Deleted'
}

export class Todos implements Action {
  readonly type = TodosActionTypes.TodosAction;
}

export class TodoSelected implements Action {
  readonly type = TodosActionTypes.TodoSelected;
  constructor(public payload) {}
}

export class LoadTodos implements Action {
  readonly type = TodosActionTypes.LoadTodos;
}

export class TodosLoaded implements Action {
  readonly type = TodosActionTypes.TodosLoaded;
  constructor(public payload: Todo[]) {}
}

export class CreateTodo implements Action {
  readonly type = TodosActionTypes.CreateTodo;
  constructor(public payload: Todo) {}
}

export class TodoCreated implements Action {
  readonly type = TodosActionTypes.TodoCreated;
  constructor(public payload: Todo) {}
}

export class UpdateTodo implements Action {
  readonly type = TodosActionTypes.UpdateTodo;
  constructor(public payload: Todo) {}
}

export class TodoUpdated implements Action {
  readonly type = TodosActionTypes.TodoUpdated;
  constructor(public payload: Todo) {}
}

export class DeleteTodo implements Action {
  readonly type = TodosActionTypes.DeleteTodo;
  constructor(public payload: Todo) {}
}

export class TodoDeleted implements Action {
  readonly type = TodosActionTypes.TodoDeleted;
  constructor(public payload: Todo) {}
}

export type TodosAction =
  | Todos
  | TodoSelected
  | LoadTodos
  | TodosLoaded
  | CreateTodo
  | TodoCreated
  | UpdateTodo
  | TodoUpdated
  | DeleteTodo
  | TodoDeleted;
