import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { PlayerActions, PlayerActionTypes } from './player.actions';
import { Player } from '@api/common-data';

export interface PlayerState extends EntityState<Player> {
  selectedPlayerId: string | null;
}

export const adapter: EntityAdapter<Player> = createEntityAdapter<Player>();
export const initialState: PlayerState = adapter.getInitialState({
  selectedPlayerId: null
});

export function playerReducer(
  state: PlayerState = initialState,
  action: PlayerActions
): PlayerState {
  switch (action.type) {
    case PlayerActionTypes.PlayerSelected: {
      return Object.assign({}, state, { selectedPlayerId: action.payload.id });
    }

    case PlayerActionTypes.PlayersLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case PlayerActionTypes.PlayerCreated: {
      return adapter.addOne(action.payload, state);
    }

    case PlayerActionTypes.PlayerUpdated: {
      return adapter.upsertOne(action.payload, state);
    }

    case PlayerActionTypes.PlayerDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }
    default:
      return state;
  }
}

export const getSelectedPlayerId = (state: PlayerState) =>
  state.selectedPlayerId;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectPlayerIds = selectIds;
export const selectPlayerEntities = selectEntities;
export const selectAllPlayers = selectAll;
export const selectPlayerTotal = selectTotal;
