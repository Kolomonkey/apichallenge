import { InstrumentService } from './../../core/instrument.service';
import { DataPersistence } from '@nrwl/nx';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { InstrumentState } from './instrument.reducer';
import { Instrument } from '@api/common-data';

import {
  InstrumentActionTypes,
  LoadInstruments,
  InstrumentsLoaded,
  CreateInstrument,
  InstrumentCreated,
  UpdateInstrument,
  InstrumentUpdated,
  DeleteInstrument,
  InstrumentDeleted
} from './instrument.actions';

@Injectable()
export class InstrumentEffects {
  @Effect()
  loadInstruments$ = this.dataPersistence.fetch(
    InstrumentActionTypes.LoadInstruments,
    {
      run: (action: LoadInstruments, state: InstrumentState) => {
        return this.instrumentService
          .getInstruments()
          .pipe(map((res: Instrument[]) => new InstrumentsLoaded(res)));
      },

      onError(action: LoadInstruments, error) {
        console.error('error', error);
      }
    }
  );

  @Effect()
  createInstrument$ = this.dataPersistence.fetch(
    InstrumentActionTypes.CreateInstrument,
    {
      run: (action: CreateInstrument, state: InstrumentState) => {
        return this.instrumentService
          .createInstrument(action.payload)
          .pipe(map((res: Instrument) => new InstrumentCreated(res)));
      },

      onError(action: CreateInstrument, error) {
        console.error('error', error);
      }
    }
  );

  @Effect()
  updateInstrument$ = this.dataPersistence.fetch(
    InstrumentActionTypes.UpdateInstrument,
    {
      run: (action: UpdateInstrument, state: InstrumentState) => {
        return this.instrumentService
          .updateInstrument(action.payload)
          .pipe(map((res: Instrument) => new InstrumentUpdated(res)));
      },

      onError(action: UpdateInstrument, error) {
        console.error('error', error);
      }
    }
  );

  @Effect()
  deleteInstrument$ = this.dataPersistence.fetch(
    InstrumentActionTypes.DeleteInstrument,
    {
      run: (action: DeleteInstrument, state: InstrumentState) => {
        return this.instrumentService
          .deleteInstrument(action.payload)
          .pipe(
            map((res: Instrument) => new InstrumentDeleted(action.payload))
          );
      },

      onError(action: DeleteInstrument, error) {
        console.error('error', error);
      }
    }
  );

  constructor(
    private instrumentService: InstrumentService,
    private dataPersistence: DataPersistence<InstrumentState>
  ) {}
}
