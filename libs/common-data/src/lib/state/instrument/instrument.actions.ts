import { Action } from '@ngrx/store';
import { Instrument } from '@api/common-data';

export enum InstrumentActionTypes {
  InstrumentSelected = '[Instrument] Selected',
  LoadInstruments = '[Instrument] Load Instruments',
  InstrumentsLoaded = '[Instrument] Instrument Loaded',
  CreateInstrument = '[Instrument] Create Instrument',
  InstrumentCreated = '[Instrument] Instrument Created',
  UpdateInstrument = '[Instrument] Update Instrument',
  InstrumentUpdated = '[Instrument] Instrument Updated',
  DeleteInstrument = '[Instrument] Delete Instrument',
  InstrumentDeleted = '[Instrument] Instrument Deleted'
}

export class InstrumentSelected implements Action {
  readonly type = InstrumentActionTypes.InstrumentSelected;
  constructor(public payload) {}
}

export class LoadInstruments implements Action {
  readonly type = InstrumentActionTypes.LoadInstruments;
}

export class InstrumentsLoaded implements Action {
  readonly type = InstrumentActionTypes.InstrumentsLoaded;
  constructor(public payload: Instrument[]) {}
}

export class CreateInstrument implements Action {
  readonly type = InstrumentActionTypes.CreateInstrument;
  constructor(public payload: Instrument) {}
}

export class InstrumentCreated implements Action {
  readonly type = InstrumentActionTypes.InstrumentCreated;
  constructor(public payload: Instrument) {}
}

export class UpdateInstrument implements Action {
  readonly type = InstrumentActionTypes.UpdateInstrument;
  constructor(public payload: Instrument) {}
}

export class InstrumentUpdated implements Action {
  readonly type = InstrumentActionTypes.InstrumentUpdated;
  constructor(public payload: Instrument) {}
}

export class DeleteInstrument implements Action {
  readonly type = InstrumentActionTypes.DeleteInstrument;
  constructor(public payload: Instrument) {}
}

export class InstrumentDeleted implements Action {
  readonly type = InstrumentActionTypes.InstrumentDeleted;
  constructor(public payload: Instrument) {}
}

export type InstrumentActions =
  | InstrumentSelected
  | LoadInstruments
  | InstrumentsLoaded
  | CreateInstrument
  | InstrumentCreated
  | UpdateInstrument
  | InstrumentUpdated
  | DeleteInstrument
  | InstrumentDeleted;
