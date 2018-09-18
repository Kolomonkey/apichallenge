import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { DrinkActions, DrinkActionTypes } from './drink.actions';
import { Drink } from '@api/common-data';

export interface DrinkState extends EntityState<Drink> {
  selectedDrinkId: string | null;
}

export const adapter: EntityAdapter<Drink> = createEntityAdapter<Drink>();
export const initialState: DrinkState = adapter.getInitialState({
  selectedDrinkId: null
});

export function drinkReducer(
  state: DrinkState = initialState,
  action: DrinkActions
): DrinkState {
  switch (action.type) {
    case DrinkActionTypes.DrinkSelected: {
      return Object.assign({}, state, { selectedDrinkId: action.payload });
    }
    case DrinkActionTypes.DrinksLoaded: {
      return adapter.addAll(action.payload, state);
    }
    case DrinkActionTypes.DrinkCreated: {
      return adapter.addOne(action.payload, state);
    }
    case DrinkActionTypes.DrinkUpdated: {
      return adapter.upsertOne(action.payload, state);
    }
    case DrinkActionTypes.DrinkDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }
    default:
      return state;
  }
}

export const getSelectedDrinkId = (state: DrinkState) => state.selectedDrinkId;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectDrinkIds = selectIds;

export const selectDrinkEntities = selectEntities;

export const selectAllDrinks = selectAll;

export const selectDrinkTotal = selectTotal;
