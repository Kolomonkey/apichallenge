import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EpisodeState } from './episode.reducer';
import * as EpisodesAction from './episode.actions';
import { selectAllEpisodes, selectCurrentEpisode } from '..';

@Injectable()
export class EpisodeFacade {
  allEpisodes$ = this.store.pipe(select(selectAllEpisodes));
  currentEpisode$ = this.store.pipe(select(selectCurrentEpisode));

  constructor(private store: Store<EpisodeState>) {}

  loadAll() {
    this.store.dispatch(new EpisodesAction.LoadEpisodes());
  }

  selectEpisode(episode) {
    this.store.dispatch(new EpisodesAction.EpisodeSelected(episode));
  }

  createEpisode(episode) {
    this.store.dispatch(new EpisodesAction.CreateEpisode(episode));
  }

  updateEpisode(episode) {
    this.store.dispatch(new EpisodesAction.UpdateEpisode(episode));
  }

  deleteEpisode(episode) {
    this.store.dispatch(new EpisodesAction.DeleteEpisode(episode));
  }
}
