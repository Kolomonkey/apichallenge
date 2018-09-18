import { DataPersistence } from '@nrwl/nx';
import { DrinkService } from './../../core/drink.service';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Drink } from '@api/common-data';
import { DrinkState } from './drink.reducer';
import { map } from 'rxjs/operators';

import {
  LoadDrinks,
  DrinksLoaded,
  CreateDrink,
  DrinkCreated,
  UpdateDrink,
  DrinkUpdated,
  DeleteDrink,
  DrinkDeleted,
  DrinkActionTypes
} from './drink.actions';

@Injectable()
export class DrinkEffects {
  @Effect()
  loadDrinks$ = this.dataPersistence.fetch(DrinkActionTypes.LoadDrinks, {
    run: (action: LoadDrinks, state: DrinkState) => {
      return this.drinkService
        .getDrinks()
        .pipe(map((res: Drink[]) => new DrinksLoaded(res)));
    },

    onError(action: LoadDrinks, error) {
      console.error('error', error);
    }
  });

  @Effect()
  createDrinks$ = this.dataPersistence.fetch(DrinkActionTypes.CreateDrink, {
    run: (action: CreateDrink, state: DrinkState) => {
      return this.drinkService
        .createDrink(action.payload)
        .pipe(map((res: Drink) => new DrinkCreated(res)));
    },

    onError(action: CreateDrink, error) {
      console.error('error', error);
    }
  });

  @Effect()
  updateDrink$ = this.dataPersistence.fetch(DrinkActionTypes.UpdateDrink, {
    run: (action: UpdateDrink, state: DrinkState) => {
      return this.drinkService
        .updateDrink(action.payload)
        .pipe(map((res: Drink) => new DrinkUpdated(res)));
    },

    onError(action: UpdateDrink, error) {
      console.error('error', error);
    }
  });

  @Effect()
  deleteDrink$ = this.dataPersistence.fetch(DrinkActionTypes.DeleteDrink, {
    run: (action: DeleteDrink, state: DrinkState) => {
      return this.drinkService
        .deleteDrink(action.payload)
        .pipe(map((res: Drink) => new DrinkDeleted(action.payload)));
    },

    onError(action: DeleteDrink, error) {
      console.error('error', error);
    }
  });

  constructor(
    private drinkService: DrinkService,
    private dataPersistence: DataPersistence<DrinkState>
  ) {}
}
