import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PlanetState } from './planet.reducer';
import * as PlanetsAction from './planet.actions';
import { selectAllPlanets, selectCurrentPlanet } from '..';

@Injectable()
export class PlanetFacade {
  allPlanets$ = this.store.pipe(select(selectAllPlanets));
  currentPlanet$ = this.store.pipe(select(selectCurrentPlanet));

  constructor(private store: Store<PlanetState>) {}

  loadAll() {
    this.store.dispatch(new PlanetsAction.LoadPlanets());
  }

  selectPlanet(planet) {
    this.store.dispatch(new PlanetsAction.PlanetSelected(planet));
  }

  createPlanet(planet) {
    this.store.dispatch(new PlanetsAction.CreatePlanet(planet));
  }

  updatePlanet(planet) {
    this.store.dispatch(new PlanetsAction.UpdatePlanet(planet));
  }

  deletePlanet(planet) {
    this.store.dispatch(new PlanetsAction.DeletePlanet(planet));
  }
}
