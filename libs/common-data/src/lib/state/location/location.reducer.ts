import { Location } from '@api/common-data';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { LocationActions, LocationActionTypes } from './location.actions';

export interface LocationState extends EntityState<Location> {
  selectedLocationId: string | null;
}

export const adapter: EntityAdapter<Location> = createEntityAdapter<Location>();
export const initialState: LocationState = adapter.getInitialState({
  selectedLocationId: null
});

export function locationReducer(
  state: LocationState = initialState,
  action: LocationActions
): LocationState {
  switch (action.type) {
    case LocationActionTypes.LocationSelected: {
      return Object.assign({}, state, {
        selectedLocationId: action.payload.id
      });
    }

    case LocationActionTypes.LocationsLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case LocationActionTypes.CreateLocation: {
      return adapter.addOne(action.payload, state);
    }

    case LocationActionTypes.UpdateLocation: {
      return adapter.upsertOne(action.payload, state);
    }

    case LocationActionTypes.DeleteLocation: {
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedLocationId = (state: LocationState) =>
  state.selectedLocationId;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectLocationIds = selectIds;
export const selectLocationEntities = selectEntities;
export const selectAllLocations = selectAll;
export const selectLocationTotal = selectTotal;
