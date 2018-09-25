import { Videogame } from './../../core/videogame.model';
import { Action } from '@ngrx/store';

export enum VideogameActionTypes {
  VideogameSelected = '[Videogame] Selected',
  LoadVideogames = '[Videogame] Load Videogames',
  VideogamesLoaded = '[Videogame] Videogames Loaded',
  CreateVideogame = '[Videogame] Create Videogame',
  VideogameCreated = '[Videogame] Videogame Created',
  UpdateVideogame = '[Videogame] Update Videogame',
  VideogameUpdated = '[Videogame] Videogame Updated',
  DeleteVideogame = '[Videogame] Delete Videogame',
  VideogameDeleted = '[Videogame] Videogame Deleted'
}

export class VideogameSelected implements Action {
  readonly type = VideogameActionTypes.VideogameSelected;
  constructor(public payload: Videogame) {}
}

export class LoadVideogames implements Action {
  readonly type = VideogameActionTypes.LoadVideogames;
}

export class VideogamesLoaded implements Action {
  readonly type = VideogameActionTypes.VideogamesLoaded;
  constructor(public payload: Videogame[]) {}
}

export class CreateVideogame implements Action {
  readonly type = VideogameActionTypes.CreateVideogame;
  constructor(public payload: Videogame) {}
}

export class VideogameCreated implements Action {
  readonly type = VideogameActionTypes.VideogameCreated;
  constructor(public payload: Videogame) {}
}

export class UpdateVideogame implements Action {
  readonly type = VideogameActionTypes.UpdateVideogame;
  constructor(public payload: Videogame) {}
}

export class VideogameUpdated implements Action {
  readonly type = VideogameActionTypes.VideogameUpdated;
  constructor(public payload: Videogame) {}
}

export class DeleteVideogame implements Action {
  readonly type = VideogameActionTypes.DeleteVideogame;
  constructor(public payload: Videogame) {}
}

export class VideogameDeleted implements Action {
  readonly type = VideogameActionTypes.VideogameDeleted;
  constructor(public payload: Videogame) {}
}

export type VideogameActions =
  | VideogameSelected
  | LoadVideogames
  | VideogamesLoaded
  | CreateVideogame
  | VideogameCreated
  | UpdateVideogame
  | VideogameUpdated
  | DeleteVideogame
  | VideogameDeleted;
