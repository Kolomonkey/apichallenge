import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { TodosAction, TodosActionTypes, TodosLoaded } from './todo.actions';
import { Todo } from './../../core/todo.model';

export interface TodosState extends EntityState<Todo> {
  selectedTodoId: string | null;
}

export const adapater: EntityAdapter<Todo> = createEntityAdapter<Todo>();
export const initialState: TodosState = adapater.getInitialState({
  selectedTodoId: null
});

export function todosReducer(
  state: TodosState = initialState,
  action: TodosAction
): TodosState {
  switch (action.type) {
    case TodosActionTypes.TodoSelected: {
      return Object.assign({}, state, { selectedTodo: action.payload });
    }
    case TodosActionTypes.TodosLoaded: {
      return adapater.addAll(action.payload, state);
    }
    case TodosActionTypes.TodoCreated: {
      return adapater.addOne(action.payload, state);
    }
    case TodosActionTypes.TodoUpdated: {
      return adapater.upsertOne(action.payload, state);
    }
    case TodosActionTypes.TodoDeleted: {
      return adapater.removeOne(action.payload.id, state);
    }
    default:
      return state;
  }
}

export const getSelectedTodoId = (state: TodosState) => state.selectedTodoId;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapater.getSelectors();

export const selectTodoIds = selectIds;

export const selectTodoEntities = selectEntities;

export const selectAllTodos = selectAll;

export const selectTodoTotal = selectTotal;
