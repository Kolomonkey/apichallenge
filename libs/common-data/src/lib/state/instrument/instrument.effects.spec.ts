import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { InstrumentEffects } from './instrument.effects';

describe('InstrumentEffects', () => {
  let actions$: Observable<any>;
  let effects: InstrumentEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstrumentEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(InstrumentEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
