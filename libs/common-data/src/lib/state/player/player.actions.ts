import { Action } from '@ngrx/store';
import { Player } from '@api/common-data';

export enum PlayerActionTypes {
  PlayerSelected = '[Player] Selected',
  LoadPlayers = '[Player] Load Players',
  PlayersLoaded = '[Player] Players Loaded',
  CreatePlayer = '[Player] Create Player',
  PlayerCreated = '[Player] Player Created',
  UpdatePlayer = '[Player] Update Player',
  PlayerUpdated = '[Player] Player Updated',
  DeletePlayer = '[Player] Delete Player',
  PlayerDeleted = '[Player] Player Deleted'
}

export class PlayerSelected implements Action {
  readonly type = PlayerActionTypes.PlayerSelected;
  constructor(public payload) {}
}

export class LoadPlayers implements Action {
  readonly type = PlayerActionTypes.LoadPlayers;
}

export class PlayersLoaded implements Action {
  readonly type = PlayerActionTypes.PlayersLoaded;
  constructor(public payload: Player[]) {}
}

export class CreatePlayer implements Action {
  readonly type = PlayerActionTypes.CreatePlayer;
  constructor(public payload: Player) {}
}

export class PlayerCreated implements Action {
  readonly type = PlayerActionTypes.PlayerCreated;
  constructor(public payload: Player) {}
}

export class UpdatePlayer implements Action {
  readonly type = PlayerActionTypes.UpdatePlayer;
  constructor(public payload: Player) {}
}

export class PlayerUpdated implements Action {
  readonly type = PlayerActionTypes.PlayerUpdated;
  constructor(public payload: Player) {}
}

export class DeletePlayer implements Action {
  readonly type = PlayerActionTypes.DeletePlayer;
  constructor(public payload: Player) {}
}

export class PlayerDeleted implements Action {
  readonly type = PlayerActionTypes.PlayerDeleted;
  constructor(public payload: Player) {}
}

export type PlayerActions =
  | PlayerSelected
  | LoadPlayers
  | PlayersLoaded
  | CreatePlayer
  | PlayerCreated
  | UpdatePlayer
  | PlayerUpdated
  | DeletePlayer
  | PlayerDeleted;
