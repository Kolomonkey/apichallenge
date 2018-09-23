import { DataPersistence } from '@nrwl/nx';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PlayerService } from './../../core/player.service';

import {
  PlayerSelected,
  LoadPlayers,
  PlayersLoaded,
  CreatePlayer,
  PlayerCreated,
  UpdatePlayer,
  PlayerUpdated,
  DeletePlayer,
  PlayerDeleted,
  PlayerActionTypes
} from './player.actions';
import { Player } from '@api/common-data';
import { PlayerState } from './player.reducer';
import { map } from 'rxjs/operators';

@Injectable()
export class PlayerEffects {
  @Effect()
  loadPlayers$ = this.dataPersistence.fetch(PlayerActionTypes.LoadPlayers, {
    run: (action: LoadPlayers, state: PlayerState) => {
      return this.playerService
        .getPlayers()
        .pipe(map((res: Player[]) => new PlayersLoaded(res)));
    },

    onError(action: LoadPlayers, error) {
      console.error('error', error);
    }
  });

  @Effect()
  createPlayer$ = this.dataPersistence.fetch(PlayerActionTypes.CreatePlayer, {
    run: (action: CreatePlayer, state: PlayerState) => {
      return this.playerService
        .createPlayer(action.payload)
        .pipe(map((res: Player) => new PlayerCreated(res)));
    },

    onError(action: CreatePlayer, error) {
      console.error('error', error);
    }
  });

  @Effect()
  updatePlayer$ = this.dataPersistence.fetch(PlayerActionTypes.UpdatePlayer, {
    run: (action: UpdatePlayer, state: PlayerState) => {
      return this.playerService
        .updatePlayer(action.payload)
        .pipe(map((res: Player) => new PlayerUpdated(res)));
    },

    onError(action: UpdatePlayer, error) {
      console.error('error', error);
    }
  });

  @Effect()
  deletePlayer$ = this.dataPersistence.fetch(PlayerActionTypes.DeletePlayer, {
    run: (action: DeletePlayer, state: PlayerState) => {
      return this.playerService
        .deletePlayer(action.payload)
        .pipe(map((res: Player) => new PlayerDeleted(action.payload)));
    },

    onError(action: DeletePlayer, error) {
      console.error('error', error);
    }
  });

  constructor(
    private dataPersistence: DataPersistence<PlayerState>,
    private playerService: PlayerService
  ) {}
}
