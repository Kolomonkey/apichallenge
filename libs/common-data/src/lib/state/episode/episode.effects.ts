import { DataPersistence } from '@nrwl/nx';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { EpisodeService } from './../../core/episode.service';

import {
  EpisodeSelected,
  LoadEpisodes,
  EpisodesLoaded,
  CreateEpisode,
  UpdateEpisode,
  DeleteEpisode,
  EpisodeActionTypes
} from './episode.actions';
import { Episode } from '@api/common-data';
import { EpisodeState } from './episode.reducer';
import { map } from 'rxjs/operators';

@Injectable()
export class EpisodeEffects {
  @Effect()
  loadEpisodes$ = this.dataPersistence.fetch(EpisodeActionTypes.LoadEpisodes, {
    run: (action: LoadEpisodes, state: EpisodeState) => {
      return this.episodeService
        .getEpisodes()
        .pipe(map((res: Episode[]) => new EpisodesLoaded(res)));
    },

    onError(action: LoadEpisodes, error) {
      console.error('error', error);
    }
  });

  constructor(
    private dataPersistence: DataPersistence<EpisodeState>,
    private episodeService: EpisodeService
  ) {}
}
