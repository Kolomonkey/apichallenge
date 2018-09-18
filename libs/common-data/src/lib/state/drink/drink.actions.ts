import { Action } from '@ngrx/store';
import { Drink } from '@api/common-data';

export enum DrinkActionTypes {
  DrinkSelected = '[Drink] Drink Loaded',
  LoadDrinks = '[Drink] Load Drinks',
  DrinksLoaded = '[Drink] Drinks Loaded',
  CreateDrink = '[Drink] Create Drink',
  DrinkCreated = '[Drink] Drink Created',
  UpdateDrink = '[Drink] Update Drink',
  DrinkUpdated = '[Drink] Drink Updated',
  DeleteDrink = '[Drink] Delete Drink',
  DrinkDeleted = '[Drink] Drink Deleted'
}

export class DrinkSelected implements Action {
  readonly type = DrinkActionTypes.DrinkSelected;
  constructor(public payload) {}
}

export class LoadDrinks implements Action {
  readonly type = DrinkActionTypes.LoadDrinks;
}

export class DrinksLoaded implements Action {
  readonly type = DrinkActionTypes.DrinksLoaded;
  constructor(public payload: Drink[]) {}
}

export class CreateDrink implements Action {
  readonly type = DrinkActionTypes.CreateDrink;
  constructor(public payload: Drink) {}
}

export class DrinkCreated implements Action {
  readonly type = DrinkActionTypes.DrinkCreated;
  constructor(public payload: Drink) {}
}

export class UpdateDrink implements Action {
  readonly type = DrinkActionTypes.UpdateDrink;
  constructor(public payload: Drink) {}
}

export class DrinkUpdated implements Action {
  readonly type = DrinkActionTypes.DrinkUpdated;
  constructor(public payload: Drink) {}
}

export class DeleteDrink implements Action {
  readonly type = DrinkActionTypes.DeleteDrink;
  constructor(public payload: Drink) {}
}

export class DrinkDeleted implements Action {
  readonly type = DrinkActionTypes.DrinkDeleted;
  constructor(public payload: Drink) {}
}

export type DrinkActions =
  | DrinkSelected
  | LoadDrinks
  | DrinksLoaded
  | CreateDrink
  | DrinkCreated
  | UpdateDrink
  | DrinkUpdated
  | DeleteDrink
  | DrinkDeleted;
