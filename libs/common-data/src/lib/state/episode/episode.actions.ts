import { Action } from '@ngrx/store';
import { Episode } from '../../core/episode.model';

export enum EpisodeActionTypes {
  EpisodeSelected = '[Episode] Loaded',
  LoadEpisodes = '[Episode] Load Episodes',
  EpisodesLoaded = '[Episode] Episodes Loaded',
  CreateEpisode = '[Episode] Create Episode',
  UpdateEpisode = '[Episode] Update Episode',
  DeleteEpisode = '[Episode] Delete Episode'
}

export class EpisodeSelected implements Action {
  readonly type = EpisodeActionTypes.EpisodeSelected;
  constructor(public payload) {}
}

export class LoadEpisodes implements Action {
  readonly type = EpisodeActionTypes.LoadEpisodes;
}

export class EpisodesLoaded implements Action {
  readonly type = EpisodeActionTypes.EpisodesLoaded;
  constructor(public payload: Episode[]) {}
}

export class CreateEpisode implements Action {
  readonly type = EpisodeActionTypes.CreateEpisode;
  constructor(public payload: Episode) {}
}

export class UpdateEpisode implements Action {
  readonly type = EpisodeActionTypes.UpdateEpisode;
  constructor(public payload: Episode) {}
}

export class DeleteEpisode implements Action {
  readonly type = EpisodeActionTypes.DeleteEpisode;
  constructor(public payload: Episode) {}
}

export type EpisodeActions =
  | EpisodeSelected
  | LoadEpisodes
  | EpisodesLoaded
  | CreateEpisode
  | UpdateEpisode
  | DeleteEpisode;
