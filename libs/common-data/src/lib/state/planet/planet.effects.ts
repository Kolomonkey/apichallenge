import { DataPersistence } from '@nrwl/nx';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { PlanetService } from './../../core/planet.service';

import {
  PlanetSelected,
  LoadPlanets,
  PlanetsLoaded,
  CreatePlanet,
  UpdatePlanet,
  DeletePlanet,
  PlanetActionTypes
} from './planet.actions';
import { Planet } from '@api/common-data';
import { PlanetState } from './planet.reducer';
import { map } from 'rxjs/operators';

@Injectable()
export class PlanetEffects {
  @Effect()
  loadPlanets$ = this.dataPersistence.fetch(PlanetActionTypes.LoadPlanets, {
    run: (action: LoadPlanets, state: PlanetState) => {
      return this.planetService
        .getPlanets()
        .pipe(map((res: Planet[]) => new PlanetsLoaded(res)));
    },

    onError(action: LoadPlanets, error) {
      console.error('error', error);
    }
  });

  constructor(
    private dataPersistence: DataPersistence<PlanetState>,
    private planetService: PlanetService
  ) {}
}
