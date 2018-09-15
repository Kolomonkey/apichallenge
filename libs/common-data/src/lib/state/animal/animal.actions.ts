import { Action } from '@ngrx/store';
import { Animal } from '@api/common-data';

export enum AnimalActionTypes {
  AnimalAction = '[Animal] Action',
  AnimalSelected = '[Animal] Selected',
  LoadAnimals = '[Animal] Load Animals',
  AnimalsLoaded = '[Animal] Animals Loaded',
  AddAnimal = '[Animal] Add Animal',
  AnimalAdded = '[Animal] Animal Added',
  UpdateAnimal = '[Animal] Update Animal',
  AnimalUpdated = '[Animal] Animal Updated',
  DeleteAnimal = '[Animal] Delete Animal',
  AnimalDeleted = '[Animal] Animal Deleted'
}

export class Animals implements Action {
  readonly type = AnimalActionTypes.AnimalAction;
}

export class AnimalSelected implements Action {
  readonly type = AnimalActionTypes.AnimalSelected;
  constructor(public payload) {}
}

export class LoadAnimals implements Action {
  readonly type = AnimalActionTypes.LoadAnimals;
  constructor() {}
}

export class AnimalsLoaded implements Action {
  readonly type = AnimalActionTypes.AnimalsLoaded;
  constructor(public payload: Animal[]) {}
}

export class AddAnimal implements Action {
  readonly type = AnimalActionTypes.AddAnimal;
  constructor(public payload: Animal) {}
}

export class AnimalAdded implements Action {
  readonly type = AnimalActionTypes.AnimalAdded;
  constructor(public payload: Animal) {}
}

export class UpdateAnimal implements Action {
  readonly type = AnimalActionTypes.UpdateAnimal;
  constructor(public payload: Animal) {}
}

export class AnimalUpdated implements Action {
  readonly type = AnimalActionTypes.AnimalUpdated;
  constructor(public payload: Animal) {}
}

export class DeleteAnimal implements Action {
  readonly type = AnimalActionTypes.DeleteAnimal;
  constructor(public payload: Animal) {}
}

export class AnimalDeleted implements Action {
  readonly type = AnimalActionTypes.AnimalDeleted;
  constructor(public payload: Animal) {}
}

export type AnimalActions =
  | Animals
  | AnimalSelected
  | LoadAnimals
  | AnimalsLoaded
  | AddAnimal
  | AnimalAdded
  | UpdateAnimal
  | AnimalUpdated
  | DeleteAnimal
  | AnimalDeleted;
