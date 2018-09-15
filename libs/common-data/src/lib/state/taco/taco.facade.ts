import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { selectAllTacos, selectCurrentTaco } from '..';
import * as TacoActions from './taco.actions';
import { TacoState } from './taco.reducer';

@Injectable()
export class TacoFacade {
  allTacos$ = this.store.pipe(select(selectAllTacos));
  currentTaco$ = this.store.pipe(select(selectCurrentTaco));

  constructor(private store: Store<TacoState>) {}

  loadAll() {
    this.store.dispatch(new TacoActions.LoadTacos());
  }

  selectTaco(id) {
    this.store.dispatch(new TacoActions.TacoSelected(id));
  }

  addTaco(taco) {
    this.store.dispatch(new TacoActions.AddTaco(taco));
  }

  updateTaco(taco) {
    this.store.dispatch(new TacoActions.UpdateTaco(taco));
  }

  deleteTaco(taco) {
    this.store.dispatch(new TacoActions.DeleteTaco(taco));
  }
}
