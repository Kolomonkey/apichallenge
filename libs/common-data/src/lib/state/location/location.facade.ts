import { selectAllLocations, selectCurrentLocation } from '..';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { LocationState } from './location.reducer';
import * as LocationsAction from './location.actions';

@Injectable()
export class LocationFacade {
  allLocations$ = this.store.pipe(select(selectAllLocations));
  currentLocation$ = this.store.pipe(select(selectCurrentLocation));

  constructor(private store: Store<LocationState>) {}

  loadAll() {
    this.store.dispatch(new LocationsAction.LoadLocations());
  }

  selectLocation(location) {
    this.store.dispatch(new LocationsAction.LocationSelected(location));
  }

  createLocation(location) {
    this.store.dispatch(new LocationsAction.CreateLocation(location));
  }

  updateLocation(location) {
    this.store.dispatch(new LocationsAction.UpdateLocation(location));
  }

  deleteLocation(location) {
    this.store.dispatch(new LocationsAction.DeleteLocation(location));
  }
}
