import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { VideogameActions, VideogameActionTypes } from './videogame.actions';
import { Videogame } from '../../core/videogame.model';

export interface VideogameState extends EntityState<Videogame> {
  loading: boolean;
  selectedVideogameId: string | null;
}

export const adapter: EntityAdapter<Videogame> = createEntityAdapter<Videogame>();
export const initialState: VideogameState = adapter.getInitialState({
  loading: false,
  selectedVideogameId: null
});

export function videogameReducer(
  state: VideogameState = initialState,
  action: VideogameActions
): VideogameState {
  switch (action.type) {
    case VideogameActionTypes.VideogameSelected: {
      return Object.assign({}, state, {
        selectedVideogameId: action.payload.id
      });
    }

    case VideogameActionTypes.LoadVideogames: {
      return state = {...state, loading: true}
    }

    case VideogameActionTypes.VideogamesLoaded: {
      state = {...state, loading: false}
      return adapter.addAll(action.payload, state);
    }

    case VideogameActionTypes.CreateVideogame: {
      return state = {...state, loading: true}
    }

    case VideogameActionTypes.VideogameCreated: {
      state = {...state, loading: false}
      return adapter.addOne(action.payload, state);
    }

    case VideogameActionTypes.UpdateVideogame: {
      return state = {...state, loading: true}
    }

    case VideogameActionTypes.VideogameUpdated: {
      state = {...state, loading: false}
      return adapter.upsertOne(action.payload, state);
    }

    case VideogameActionTypes.DeleteVideogame: {
      return state = {...state, loading: true}
    }

    case VideogameActionTypes.VideogameDeleted: {
      state = {...state, loading: false}
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedVideogameId = (state: VideogameState) =>
  state.selectedVideogameId;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectVideogameIds = selectIds;
export const selectVideogameEntities = selectEntities;
export const selectAllVideogames = selectAll;
export const selectVideogameTotal = selectTotal;
export const isLoading = (state: VideogameState) => state.loading;
