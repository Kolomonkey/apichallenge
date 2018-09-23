import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { InstrumentActions, InstrumentActionTypes} from './instrument.actions';
import { Instrument } from '@api/common-data';

export interface InstrumentState extends EntityState<Instrument> {
  selectedInstrumentId: string | null;
}

export const adapter: EntityAdapter<Instrument> = createEntityAdapter<
  Instrument
>();
export const initialState: InstrumentState = adapter.getInitialState({
  selectedInstrumentId: null
});

export function instrumentReducer(
  state = initialState,
  action: InstrumentActions
): InstrumentState {
  switch (action.type) {
    case InstrumentActionTypes.InstrumentSelected: {
      return Object.assign({}, state, { selectedInstrumentId: action.payload });
    }

    case InstrumentActionTypes.InstrumentsLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case InstrumentActionTypes.InstrumentCreated: {
      return adapter.addOne(action.payload, state);
    }

    case InstrumentActionTypes.InstrumentUpdated: {
      return adapter.upsertOne(action.payload, state);
    }

    case InstrumentActionTypes.InstrumentDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedInstrumentId = (state: InstrumentState) =>
  state.selectedInstrumentId;

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectInstrumentIds = selectIds;

export const selectInstrumentEntities = selectEntities;

export const selectAllInstruments = selectAll;

export const selectInstrumentTotal = selectTotal;
