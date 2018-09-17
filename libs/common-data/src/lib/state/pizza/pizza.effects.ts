import { Pizza } from '@api/common-data';
import { PizzaService } from '../../core/pizza.service';
import { DataPersistence } from '@nrwl/nx';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { PizzaState } from './pizza.reducer';

import {
  PizzasAction,
  LoadPizzas,
  PizzasLoaded,
  CreatePizza,
  PizzaCreated,
  UpdatePizza,
  PizzaUpdated,
  DeletePizza,
  PizzaDeleted,
  PizzaActionTypes
} from './pizza.actions';

@Injectable()
export class PizzaEffects {
  @Effect() effect$ = this.actions$.ofType(PizzaActionTypes.PizzasAction);

  @Effect()
  loadPizzas$ = this.dataPersistence.fetch(PizzaActionTypes.LoadPizzas, {
    run: (action: LoadPizzas, state: PizzaState) => {
      return this.pizzaService
        .getPizzas()
        .pipe(map((res: Pizza[]) => new PizzasLoaded(res)));
    },

    onError(action: LoadPizzas, error) {
      console.error('error', error);
    }
  });

  @Effect()
  createPizza$ = this.dataPersistence.fetch(PizzaActionTypes.CreatePizza, {
    run: (action: CreatePizza, state: PizzaState) => {
      return this.pizzaService
        .createPizza(action.payload)
        .pipe(map((res: Pizza) => new PizzaCreated(res)));
    },

    onError(action: CreatePizza, error) {
      console.error('error', error);
    }
  });

  @Effect()
  updatePizza$ = this.dataPersistence.fetch(PizzaActionTypes.UpdatePizza, {
    run: (action: UpdatePizza, state: PizzaState) => {
      return this.pizzaService
        .updatePizza(action.payload)
        .pipe(map((res: Pizza) => new PizzaUpdated(res)));
    },

    onError(action: UpdatePizza, error) {
      console.error('error', error);
    }
  });

  @Effect()
  deletePizza$ = this.dataPersistence.fetch(PizzaActionTypes.DeletePizza, {
    run: (action: DeletePizza, state: PizzaState) => {
      return this.pizzaService
        .deletePizza(action.payload)
        .pipe(map((res: Pizza) => new PizzaDeleted(action.payload)));
    },

    onError(action: DeletePizza, error) {
      console.error('error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PizzaState>,
    private pizzaService: PizzaService
  ) {}
}
