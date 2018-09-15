import { Action } from '@ngrx/store';
import { Taco } from '@api/common-data';

export enum TacoActionTypes {
  TacosAction = '[Taco] Action',
  TacoSelected = '[Taco] Taco Selected',
  LoadTacos = '[Taco] Load Tacos',
  TacosLoaded = '[Taco] Tacos Loaded',
  AddTaco = '[Taco] Add Taco',
  TacoAdded = '[Taco] Taco Added',
  UpdateTaco = '[Taco] Update Taco',
  TacoUpdated = '[Taco] Taco Updated',
  DeleteTaco = '[Taco] Delete Taco',
  TacoDeleted = '[Taco] Taco Deleted'
}

export class TacosAction implements Action {
  readonly type = TacoActionTypes.TacosAction;
}

export class TacoSelected implements Action {
  readonly type = TacoActionTypes.TacoSelected;
  constructor(public payload) {}
}

export class LoadTacos implements Action {
  readonly type = TacoActionTypes.LoadTacos;
}

export class TacosLoaded implements Action {
  readonly type = TacoActionTypes.TacosLoaded;
  constructor(public payload: Taco[]) {}
}

export class AddTaco implements Action {
  readonly type = TacoActionTypes.AddTaco;
  constructor(public payload: Taco) {}
}

export class TacoAdded implements Action {
  readonly type = TacoActionTypes.TacoAdded;
  constructor(public payload: Taco) {}
}

export class UpdateTaco implements Action {
  readonly type = TacoActionTypes.UpdateTaco;
  constructor(public payload: Taco) {}
}

export class TacoUpdated implements Action {
  readonly type = TacoActionTypes.TacoUpdated;
  constructor(public payload: Taco) {}
}

export class DeleteTaco implements Action {
  readonly type = TacoActionTypes.DeleteTaco;
  constructor(public payload: Taco) {}
}

export class TacoDeleted implements Action {
  readonly type = TacoActionTypes.TacoDeleted;
  constructor(public payload: Taco) {}
}

export type TacoActions =
  | TacosAction
  | TacoSelected
  | LoadTacos
  | TacosLoaded
  | AddTaco
  | TacoAdded
  | UpdateTaco
  | TacoUpdated
  | DeleteTaco
  | TacoDeleted;
