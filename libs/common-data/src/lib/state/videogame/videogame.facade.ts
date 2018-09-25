import { selectAllVideogames, selectCurrentVideogame, isVideogamesLoading } from './../index';
import { VideogameState } from './videogame.reducer';
import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import * as VideogameActions from './videogame.actions';

@Injectable()
export class VideogameFacade {
  allVideogames$ = this.store.pipe(select(selectAllVideogames));
  currentVideogame$ = this.store.pipe(select(selectCurrentVideogame));
  loading$ = this.store.pipe(select(isVideogamesLoading));


  constructor(private store: Store<VideogameState>) {}

  loadAll() {
    this.store.dispatch(new VideogameActions.LoadVideogames());
  }

  selectVideogame(videogame) {
    this.store.dispatch(new VideogameActions.VideogameSelected(videogame));
  }

  createVideogame(videogame) {
    this.store.dispatch(new VideogameActions.CreateVideogame(videogame));
  }

  updateVideogame(videogame) {
    this.store.dispatch(new VideogameActions.UpdateVideogame(videogame));
  }

  deleteVideogame(videogame) {
    this.store.dispatch(new VideogameActions.DeleteVideogame(videogame));
  }
}
