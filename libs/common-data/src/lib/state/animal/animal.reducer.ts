import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Animal } from '@api/common-data';

import { AnimalActions, AnimalActionTypes } from './animal.actions';

export interface AnimalState extends EntityState<Animal> {
  selectedAnimalId: string | null;
}

export const adapter: EntityAdapter<Animal> = createEntityAdapter<Animal>();
export const initialState: AnimalState = adapter.getInitialState({
  selectedAnimalId: null
});

export function animalReducer(
  state = initialState,
  action: AnimalActions
): AnimalState {
  switch (action.type) {
    case AnimalActionTypes.AnimalSelected: {
      return Object.assign({}, state, { selectedAnimalId: action.payload });
    }

    case AnimalActionTypes.AnimalsLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case AnimalActionTypes.AnimalAdded: {
      return adapter.addOne(action.payload, state);
    }

    case AnimalActionTypes.AnimalUpdated: {
      return adapter.upsertOne(action.payload, state);
    }

    case AnimalActionTypes.AnimalDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedAnimalId = (state: AnimalState) =>
  state.selectedAnimalId;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectAnimalIds = selectIds;

export const selectAnimalEntities = selectEntities;

export const selectAllAnimals = selectAll;

export const selectAnimalTotal = selectTotal;
