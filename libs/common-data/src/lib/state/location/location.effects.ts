import { Location } from './../../core/location.model';
import { LocationState } from './location.reducer';
import { LocationService } from './../../core/location.service';
import { DataPersistence } from '@nrwl/nx';
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import {
  LocationActionTypes,
  LoadLocations,
  LocationsLoaded
} from './location.actions';

@Injectable()
export class LocationEffects {
  @Effect()
  loadLocations$ = this.dataPersistence.fetch(
    LocationActionTypes.LoadLocations,
    {
      run: (action: LoadLocations, state: LocationState) => {
        return this.api
          .getLocations()
          .pipe(map((res: Location[]) => new LocationsLoaded(res)));
      },

      onError(action: LoadLocations, error) {
        console.error('error', error);
      }
    }
  );

  constructor(
    private api: LocationService,
    private dataPersistence: DataPersistence<LocationState>
  ) {}
}
