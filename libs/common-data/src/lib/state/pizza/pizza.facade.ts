import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PizzaState } from './pizza.reducer';

import { selectAllPizzas, selectCurrentPizza } from '..';
import * as PizzaActions from './pizza.actions';

@Injectable()
export class PizzaFacade {
  allPizzas$ = this.store.pipe(select(selectAllPizzas));
  currentPizza$ = this.store.pipe(select(selectCurrentPizza));

  constructor(private store: Store<PizzaState>) {}

  loadAll() {
    this.store.dispatch(new PizzaActions.LoadPizzas());
  }

  selectPizza(id) {
    this.store.dispatch(new PizzaActions.PizzaSelected(id));
  }

  createPizza(pizza) {
    this.store.dispatch(new PizzaActions.CreatePizza(pizza));
  }

  updatePizza(pizza) {
    this.store.dispatch(new PizzaActions.UpdatePizza(pizza));
  }

  deletePizza(pizza) {
    this.store.dispatch(new PizzaActions.DeletePizza(pizza));
  }
}
