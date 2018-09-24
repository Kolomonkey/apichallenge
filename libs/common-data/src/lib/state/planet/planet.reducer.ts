import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { PlanetActions, PlanetActionTypes } from './planet.actions';
import { Planet } from '@api/common-data';

export interface PlanetState extends EntityState<Planet> {
  selectedPlanetId: string | null;
}

export const adapter: EntityAdapter<Planet> = createEntityAdapter<Planet>();
export const initialState: PlanetState = adapter.getInitialState({
  selectedPlanetId: null
});

export function planetReducer(
  state: PlanetState = initialState,
  action: PlanetActions
): PlanetState {
  switch (action.type) {
    case PlanetActionTypes.PlanetSelected: {
      return Object.assign({}, state, { selectedPlanetId: action.payload.id });
    }

    case PlanetActionTypes.PlanetsLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case PlanetActionTypes.CreatePlanet: {
      return adapter.addOne(action.payload, state);
    }

    case PlanetActionTypes.UpdatePlanet: {
      return adapter.upsertOne(action.payload, state);
    }

    case PlanetActionTypes.DeletePlanet: {
      return adapter.removeOne(action.payload.id, state);
    }
    default:
      return state;
  }
}

export const getSelectedPlanetId = (state: PlanetState) =>
  state.selectedPlanetId;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectPlanetIds = selectIds;
export const selectPlanetEntities = selectEntities;
export const selectAllPlanets = selectAll;
export const selectPlanetTotal = selectTotal;
