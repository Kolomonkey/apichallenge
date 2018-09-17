import { Action } from '@ngrx/store';
import { Pizza } from '@api/common-data';

export enum PizzaActionTypes {
  PizzasAction = '[Pizza] Action',
  PizzaSelected = '[Pizza] Pizza Selected',
  LoadPizzas = '[Pizza] Load Pizzas',
  PizzasLoaded = '[Pizza] Pizzas Loaded',
  CreatePizza = '[Pizza] Create Pizza',
  PizzaCreated = '[Pizza] Pizza Created',
  UpdatePizza = '[Pizza] Update Pizza',
  PizzaUpdated = '[Pizza] Pizza Updated',
  DeletePizza = '[Pizza] Delete Pizza',
  PizzaDeleted = '[Pizza] Pizza Deleted'
}

export class PizzasAction implements Action {
  readonly type = PizzaActionTypes.PizzasAction;
}

export class PizzaSelected implements Action {
  readonly type = PizzaActionTypes.PizzaSelected;
  constructor(public payload) {}
}

export class LoadPizzas implements Action {
  readonly type = PizzaActionTypes.LoadPizzas;
}

export class PizzasLoaded implements Action {
  readonly type = PizzaActionTypes.PizzasLoaded;
  constructor(public payload: Pizza[]) {}
}

export class CreatePizza implements Action {
  readonly type = PizzaActionTypes.CreatePizza;
  constructor(public payload: Pizza) {}
}

export class PizzaCreated implements Action {
  readonly type = PizzaActionTypes.PizzaCreated;
  constructor(public payload: Pizza) {}
}

export class UpdatePizza implements Action {
  readonly type = PizzaActionTypes.UpdatePizza;
  constructor(public payload: Pizza) {}
}

export class PizzaUpdated implements Action {
  readonly type = PizzaActionTypes.PizzaUpdated;
  constructor(public payload: Pizza) {}
}

export class DeletePizza implements Action {
  readonly type = PizzaActionTypes.DeletePizza;
  constructor(public payload: Pizza) {}
}

export class PizzaDeleted implements Action {
  readonly type = PizzaActionTypes.PizzaDeleted;
  constructor(public payload: Pizza) {}
}

export type PizzaActions =
  | PizzasAction
  | PizzaSelected
  | LoadPizzas
  | PizzasLoaded
  | CreatePizza
  | PizzaCreated
  | UpdatePizza
  | PizzaUpdated
  | DeletePizza
  | PizzaDeleted;
