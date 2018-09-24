import { Action } from '@ngrx/store';
import { Planet } from '@api/common-data';

export enum PlanetActionTypes {
  PlanetSelected = '[Planet] Selected',
  LoadPlanets = '[Planet] Load Planets',
  PlanetsLoaded = '[Planet] Planets Loaded',
  CreatePlanet = '[Planet] Create Planet',
  UpdatePlanet = '[Planet] Update Planet',
  DeletePlanet = '[Planet] Delete Planet'
}

export class PlanetSelected implements Action {
  readonly type = PlanetActionTypes.PlanetSelected;
  constructor(public payload) {}
}

export class LoadPlanets implements Action {
  readonly type = PlanetActionTypes.LoadPlanets;
}

export class PlanetsLoaded implements Action {
  readonly type = PlanetActionTypes.PlanetsLoaded;
  constructor(public payload: Planet[]) {}
}

export class CreatePlanet implements Action {
  readonly type = PlanetActionTypes.CreatePlanet;
  constructor(public payload: Planet) {}
}

export class UpdatePlanet implements Action {
  readonly type = PlanetActionTypes.UpdatePlanet;
  constructor(public payload: Planet) {}
}

export class DeletePlanet implements Action {
  readonly type = PlanetActionTypes.DeletePlanet;
  constructor(public payload: Planet) {}
}

export type PlanetActions =
  | PlanetSelected
  | LoadPlanets
  | PlanetsLoaded
  | CreatePlanet
  | UpdatePlanet
  | DeletePlanet;
