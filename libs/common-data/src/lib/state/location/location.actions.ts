import { Action } from '@ngrx/store';
import { Location } from '../../core/location.model';

export enum LocationActionTypes {
  LocationSelected = '[Location] Selected',
  LoadLocations = '[Location] Load Locations',
  LocationsLoaded = '[Location] Locations Loaded',
  CreateLocation = '[Location] Create Location',
  UpdateLocation = '[Location] Update Location',
  DeleteLocation = '[Location] Delete Location'
}

export class LocationSelected implements Action {
  readonly type = LocationActionTypes.LocationSelected;
  constructor(public payload) {}
}

export class LoadLocations implements Action {
  readonly type = LocationActionTypes.LoadLocations;
}

export class LocationsLoaded implements Action {
  readonly type = LocationActionTypes.LocationsLoaded;
  constructor(public payload: Location[]) {}
}

export class CreateLocation implements Action {
  readonly type = LocationActionTypes.CreateLocation;
  constructor(public payload: Location) {}
}

export class UpdateLocation implements Action {
  readonly type = LocationActionTypes.UpdateLocation;
  constructor(public payload: Location) {}
}

export class DeleteLocation implements Action {
  readonly type = LocationActionTypes.DeleteLocation;
  constructor(public payload: Location) {}
}

export type LocationActions =
  | LocationSelected
  | LoadLocations
  | LocationsLoaded
  | CreateLocation
  | UpdateLocation
  | DeleteLocation;
