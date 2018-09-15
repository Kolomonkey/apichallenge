import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { TacoActions, TacoActionTypes } from './taco.actions';
import { Taco } from '@api/common-data';

export interface TacoState extends EntityState<Taco> {
  selectedTacoId: string | null;
}

export const adapater: EntityAdapter<Taco> = createEntityAdapter<Taco>();
export const initialState: TacoState = adapater.getInitialState({
  selectedTacoId: null
});

export function tacoReducer(
  state: TacoState = initialState,
  action: TacoActions
): TacoState {
  switch (action.type) {
    case TacoActionTypes.TacoSelected: {
      return Object.assign({}, state, { selectedTacoId: action.payload });
    }

    case TacoActionTypes.TacosLoaded: {
      return adapater.addAll(action.payload, state);
    }

    case TacoActionTypes.TacoAdded: {
      return adapater.addOne(action.payload, state);
    }

    case TacoActionTypes.TacoUpdated: {
      return adapater.upsertOne(action.payload, state);
    }

    case TacoActionTypes.TacoDeleted: {
      return adapater.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedTacoId = (state: TacoState) => state.selectedTacoId;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapater.getSelectors();

export const selectTacoIds = selectIds;

export const selectTacoEntities = selectEntities;

export const selectAllTacos = selectAll;

export const selectTacoTotal = selectTotal;
