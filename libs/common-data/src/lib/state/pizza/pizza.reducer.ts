import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { PizzaActions, PizzaActionTypes } from './pizza.actions';
import { Pizza } from '@api/common-data';

export interface PizzaState extends EntityState<Pizza> {
  selectedPizzaId: string | null;
}

export const adapter: EntityAdapter<Pizza> = createEntityAdapter<Pizza>();
export const initialState: PizzaState = adapter.getInitialState({
  selectedPizzaId: null
});

export function pizzaReducer(
  state: PizzaState = initialState,
  action: PizzaActions
): PizzaState {
  switch (action.type) {
    case PizzaActionTypes.PizzaSelected: {
      return Object.assign({}, state, { selectedPizzaId: action.payload });
    }
    case PizzaActionTypes.PizzasLoaded: {
      return adapter.addAll(action.payload, state);
    }
    case PizzaActionTypes.PizzaCreated: {
      return adapter.addOne(action.payload, state);
    }
    case PizzaActionTypes.PizzaUpdated: {
      return adapter.upsertOne(action.payload, state);
    }
    case PizzaActionTypes.PizzaDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }
    default:
      return state;
  }
}

export const getSelectedPizzaId = (state: PizzaState) => state.selectedPizzaId;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectPizzaIds = selectIds;

export const selectPizzaEntities = selectEntities;

export const selectAllPizzas = selectAll;

export const selectPizzaTotal = selectTotal;
