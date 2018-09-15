import { TacoState } from './taco.reducer';
import { TacoService } from '../../core/taco.service';
import { DataPersistence } from '@nrwl/nx';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { Taco } from '@api/common-data';

import {
  TacosAction,
  TacosLoaded,
  AddTaco,
  TacoAdded,
  UpdateTaco,
  TacoUpdated,
  DeleteTaco,
  TacoDeleted,
  TacoActionTypes,
  LoadTacos
} from './taco.actions';

@Injectable()
export class TacoEffects {
  @Effect() effect$ = this.actions$.ofType(TacoActionTypes.TacosAction);

  @Effect()
  loadTacos$ = this.dataPersistence.fetch(TacoActionTypes.LoadTacos, {
    run: (action: LoadTacos, state: TacoState) => {
      return this.tacoService
        .getTacos()
        .pipe(map((res: Taco[]) => new TacosLoaded(res)));
    },

    onError: (action: LoadTacos, error) => {
      console.error('error', error);
    }
  });

  @Effect()
  addTaco$ = this.dataPersistence.fetch(TacoActionTypes.AddTaco, {
    run: (action: AddTaco, state: TacoState) => {
      return this.tacoService
        .addTaco(action.payload)
        .pipe(map((res: Taco) => new TacoAdded(res)));
    },

    onError: (action: AddTaco, error) => {
      console.error('error', error);
    }
  });

  @Effect()
  updateTaco$ = this.dataPersistence.fetch(TacoActionTypes.UpdateTaco, {
    run: (action: UpdateTaco, state: TacoState) => {
      return this.tacoService
        .updateTaco(action.payload)
        .pipe(map((res: Taco) => new TacoUpdated(res)));
    },

    onError: (action: UpdateTaco, error) => {
      console.error('error', error);
    }
  });

  @Effect()
  deleteTaco$ = this.dataPersistence.fetch(TacoActionTypes.DeleteTaco, {
    run: (action: DeleteTaco, state: TacoState) => {
      return this.tacoService
        .deleteTaco(action.payload)
        .pipe(map((res: Taco) => new TacoDeleted(action.payload)));
    },

    onError: (action: DeleteTaco, error) => {
      console.error('error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<TacoState>,
    private tacoService: TacoService
  ) {}
}
