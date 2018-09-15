import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { selectAllAnimals, selectCurrentAnimal } from '..';
import { AnimalActionTypes, DeleteAnimal } from './animal.actions';
import * as AnimalsActions from './animal.actions';
import { AnimalState } from './animal.reducer';

@Injectable({
  providedIn: 'root'
})
export class AnimalsFacade {
  allAnimals$ = this.store.pipe(select(selectAllAnimals));
  currentAnimal$ = this.store.pipe(select(selectCurrentAnimal));

  mutations$ = this.actions$.pipe(
    filter(
      action =>
        action.type === AnimalActionTypes.AddAnimal ||
        action.type === AnimalActionTypes.UpdateAnimal ||
        action.type === AnimalActionTypes.DeleteAnimal
    )
  );

  constructor(
    private store: Store<AnimalState>,
    private actions$: ActionsSubject
  ) {}

  selectAnimal(id) {
    this.store.dispatch(new AnimalsActions.AnimalSelected(id));
  }

  loadAll() {
    this.store.dispatch(new AnimalsActions.LoadAnimals());
  }

  addAnimal(animal) {
    this.store.dispatch(new AnimalsActions.AddAnimal(animal));
  }

  updateAnimal(animal) {
    this.store.dispatch(new AnimalsActions.UpdateAnimal(animal));
  }

  deleteAnimal(animal) {
    this.store.dispatch(new AnimalsActions.DeleteAnimal(animal));
  }
}
