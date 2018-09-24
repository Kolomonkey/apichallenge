import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { EpisodeActions, EpisodeActionTypes } from './episode.actions';
import { Episode } from '@api/common-data';

export interface EpisodeState extends EntityState<Episode> {
  selectedEpisodeId: string | null;
}

export const adapter: EntityAdapter<Episode> = createEntityAdapter<Episode>();
export const initialState: EpisodeState = adapter.getInitialState({
  selectedEpisodeId: null
});

export function episodeReducer(
  state: EpisodeState = initialState,
  action: EpisodeActions
): EpisodeState {
  switch (action.type) {
    case EpisodeActionTypes.EpisodeSelected: {
      return Object.assign({}, state, { selectedEpisodeId: action.payload.id });
    }

    case EpisodeActionTypes.EpisodesLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case EpisodeActionTypes.CreateEpisode: {
      return adapter.addOne(action.payload, state);
    }

    case EpisodeActionTypes.UpdateEpisode: {
      return adapter.upsertOne(action.payload, state);
    }

    case EpisodeActionTypes.DeleteEpisode: {
      return adapter.removeOne(action.payload.id, state);
    }
    default:
      return state;
  }
}

export const getSelectedEpisodeId = (state: EpisodeState) =>
  state.selectedEpisodeId;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectEpisodeIds = selectIds;
export const selectEpisodeEntities = selectEntities;
export const selectAllEpisodes = selectAll;
export const selectEpisodeTotal = selectTotal;
