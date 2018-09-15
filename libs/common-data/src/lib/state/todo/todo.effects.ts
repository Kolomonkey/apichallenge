import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { TodosState } from './todo.reducer';
import {
  Todos,
  TodosLoaded,
  TodoSelected,
  CreateTodo,
  TodoCreated,
  UpdateTodo,
  TodoUpdated,
  DeleteTodo,
  TodoDeleted,
  TodosActionTypes,
  LoadTodos
} from './todo.actions';

import { TodoService } from '../../core/todo.service';
import { Todo } from '../../core/todo.model';
import { Injectable } from '@angular/core';

@Injectable()
export class TodosEffects {
  @Effect() effect$ = this.actions$.ofType(TodosActionTypes.TodosAction);

  @Effect()
  loadTodos$ = this.dataPersistance.fetch(TodosActionTypes.LoadTodos, {
    run: (action: LoadTodos, state: TodosState) => {
      return this.todoService
        .getTodos()
        .pipe(map((res: Todo[]) => new TodosLoaded(res)));
    },

    onError: (action: LoadTodos, error) => {
      console.error('error', error);
    }
  });

  @Effect()
  createTodo$ = this.dataPersistance.pessimisticUpdate(
    TodosActionTypes.CreateTodo,
    {
      run: (action: CreateTodo, state: TodosState) => {
        return this.todoService
          .createTodo(action.payload)
          .pipe(map((res: Todo) => new TodoCreated(res)));
      },

      onError: (actions: CreateTodo, error) => {
        console.error('error', error);
      }
    }
  );

  @Effect()
  updateTodo$ = this.dataPersistance.pessimisticUpdate(
    TodosActionTypes.UpdateTodo,
    {
      run: (action: UpdateTodo, state: TodosState) => {
        return this.todoService
          .updateTodo(action.payload)
          .pipe(map((res: Todo) => new TodoUpdated(res)));
      },

      onError: (actions: UpdateTodo, error) => {
        console.error('error', error);
      }
    }
  );

  @Effect()
  deleteTodo$ = this.dataPersistance.pessimisticUpdate(
    TodosActionTypes.DeleteTodo,
    {
      run: (action: DeleteTodo, state: TodosState) => {
        return this.todoService
          .deleteTodo(action.payload)
          .pipe(map((res: Todo) => new TodoDeleted(action.payload)));
      },

      onError: (actions: DeleteTodo, error) => {
        console.error('error', error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistance: DataPersistence<TodosState>,
    private todoService: TodoService
  ) {}
}
