import { Videogame } from './../../core/videogame.model';
import { map } from 'rxjs/operators';
import { VideogameService } from './../../core/videogame.service';
import { DataPersistence } from '@nrwl/nx';
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { VideogameState } from './videogame.reducer';
import {
  VideogameActionTypes,
  LoadVideogames,
  VideogamesLoaded,
  CreateVideogame,
  VideogameCreated,
  UpdateVideogame,
  VideogameUpdated,
  DeleteVideogame,
  VideogameDeleted
} from './videogame.actions';

@Injectable()
export class VideogameEffects {
  @Effect()
  loadVideogames$ = this.dataPersistence.fetch(VideogameActionTypes.LoadVideogames, {

      run: (action: LoadVideogames, state: VideogameState) => {
        return this.videogameService
          .getVideogames()
          .pipe(map((res: Videogame[]) => new VideogamesLoaded(res)))
      },

      onError(action: LoadVideogames, error) {
        console.error('error', error);
      }
    }
  );

  @Effect()
  createVideogames$ = this.dataPersistence.fetch(
    VideogameActionTypes.CreateVideogame,
    {
      run: (action: CreateVideogame, state: VideogameState) => {
        return this.videogameService
          .createVideogame(action.payload)
          .pipe(map((res: Videogame) => new VideogameCreated(res)))
      },

      onError(action: CreateVideogame, error) {
        console.error('error', error);
      }
    }
  );

  @Effect()
  updateVideogame$ = this.dataPersistence.fetch(
    VideogameActionTypes.UpdateVideogame,
    {
      run: (action: UpdateVideogame, state: VideogameState) => {
        return this.videogameService
          .updateVideogame(action.payload)
          .pipe(map((res: Videogame) => new VideogameUpdated(res)))
      },

      onError(action: UpdateVideogame, error) {
        console.error('error', error);
      }
    }
  );

  @Effect()
  deleteVideogame$ = this.dataPersistence.fetch(
    VideogameActionTypes.DeleteVideogame,
    {
      run: (action: DeleteVideogame, state: VideogameState) => {
        return this.videogameService
          .deleteVideogame(action.payload)
          .pipe(map((res: Videogame) => new VideogameDeleted(action.payload)))
      },

      onError(action: DeleteVideogame, error) {
        console.error('error', error);
      }
    }
  );

  constructor(
    private videogameService: VideogameService,
    private dataPersistence: DataPersistence<VideogameState>
  ) {}
}
