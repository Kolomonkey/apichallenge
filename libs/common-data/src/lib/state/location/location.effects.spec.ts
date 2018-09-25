import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LocationEffects } from './location.effects';

describe('LocationEffects', () => {
  let actions$: Observable<any>;
  let effects: LocationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(LocationEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
