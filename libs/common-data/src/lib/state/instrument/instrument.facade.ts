import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { InstrumentState } from './instrument.reducer';

import { selectAllInstruments, selectCurrentInstrument } from '..';
import * as InstrumentActions from './instrument.actions';

@Injectable()
export class InstrumentFacade {
  allInstruments$ = this.store.pipe(select(selectAllInstruments));
  currentInstrument$ = this.store.pipe(select(selectCurrentInstrument));

  constructor(private store: Store<InstrumentState>) {}

  loadAll() {
    this.store.dispatch(new InstrumentActions.LoadInstruments());
  }

  selectInstrument(id) {
    this.store.dispatch(new InstrumentActions.InstrumentSelected(id));
  }

  createInstrument(instrument) {
    this.store.dispatch(new InstrumentActions.CreateInstrument(instrument));
  }

  updateInstrument(instrument) {
    this.store.dispatch(new InstrumentActions.UpdateInstrument(instrument));
  }

  deleteInstrument(instrument) {
    this.store.dispatch(new InstrumentActions.DeleteInstrument(instrument));
  }
}
