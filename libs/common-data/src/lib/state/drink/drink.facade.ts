import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DrinkState } from './drink.reducer';

import { selectAllDrinks, selectCurrentDrink } from '..';
import * as DrinkActions from './drink.actions';

@Injectable()
export class DrinkFacade {
  allDrinks$ = this.store.pipe(select(selectAllDrinks));
  currentDrink$ = this.store.pipe(select(selectCurrentDrink));

  constructor(private store: Store<DrinkState>) {}

  loadAll() {
    this.store.dispatch(new DrinkActions.LoadDrinks());
  }

  selectDrink(id) {
    this.store.dispatch(new DrinkActions.DrinkSelected(id));
  }

  createDrink(pizza) {
    this.store.dispatch(new DrinkActions.CreateDrink(pizza));
  }

  updateDrink(pizza) {
    this.store.dispatch(new DrinkActions.UpdateDrink(pizza));
  }

  deleteDrink(pizza) {
    this.store.dispatch(new DrinkActions.DeleteDrink(pizza));
  }
}
