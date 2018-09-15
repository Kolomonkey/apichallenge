import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import {
  AddAnimal,
  DeleteAnimal,
  AnimalAdded,
  AnimalActionTypes,
  AnimalsLoaded,
  AnimalUpdated,
  LoadAnimals,
  UpdateAnimal,
  AnimalDeleted
} from './animal.actions';
import { Animal } from '@api/common-data';
import { AnimalState } from './animal.reducer';
import { AnimalService } from '../../core/animal.service';

@Injectable()
export class AnimalEffects {
  @Effect() effects$ = this.actions$.ofType(AnimalActionTypes.AnimalAction);

  @Effect()
  LoadAnimals$ = this.dataPersistence.fetch(AnimalActionTypes.LoadAnimals, {
    run: (action: LoadAnimals, state: AnimalState) => {
      return this.animalService
        .getAnimals()
        .pipe(map((res: Animal[]) => new AnimalsLoaded(res)));
    },

    onError: (action: LoadAnimals, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  addAnimal$ = this.dataPersistence.fetch(AnimalActionTypes.AddAnimal, {
    run: (action: AddAnimal, state: AnimalState) => {
      return this.animalService
        .createAnimal(action.payload)
        .pipe(map((res: Animal) => new AnimalAdded(res)));
    },

    onError: (action: AddAnimal, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  updateAnimal$ = this.dataPersistence.fetch(AnimalActionTypes.UpdateAnimal, {
    run: (action: UpdateAnimal, state: AnimalState) => {
      return this.animalService
        .updateAnimal(action.payload)
        .pipe(map((res: Animal) => new AnimalUpdated(res)))
    },

    onError: (action: UpdateAnimal, error) => {
      console.error('Error', error);
    }
  });

  @Effect()
  DeleteAnimal$ = this.dataPersistence.fetch(AnimalActionTypes.DeleteAnimal, {
    run: (action: DeleteAnimal, state: AnimalState) => {
      return this.animalService
        .deleteAnimal(action.payload)
        .pipe(map((res: Animal) => new AnimalDeleted(action.payload)));
    },

    onError: (action: DeleteAnimal, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AnimalState>,
    private animalService: AnimalService
  ) {}
}
