import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PlayerState } from './player.reducer';
import * as PlayersAction from './player.actions';
import { selectAllPlayers, selectCurrentPlayer } from '..';

@Injectable()
export class PlayerFacade {
  allPlayers$ = this.store.pipe(select(selectAllPlayers));
  currentPlayer$ = this.store.pipe(select(selectCurrentPlayer));

  constructor(private store: Store<PlayerState>) {}

  loadAll() {
    this.store.dispatch(new PlayersAction.LoadPlayers());
  }

  selectPlayer(player) {
    this.store.dispatch(new PlayersAction.PlayerSelected(player));
  }

  createPlayer(player) {
    this.store.dispatch(new PlayersAction.CreatePlayer(player));
  }

  updatePlayer(player) {
    this.store.dispatch(new PlayersAction.UpdatePlayer(player));
  }

  deletePlayer(player) {
    this.store.dispatch(new PlayersAction.DeletePlayer(player));
  }
}
