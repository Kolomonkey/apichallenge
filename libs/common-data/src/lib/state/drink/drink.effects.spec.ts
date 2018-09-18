import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DrinkEffects } from './drink.effects';

describe('DrinkEffects', () => {
  let actions$: Observable<any>;
  let effects: DrinkEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrinkEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(DrinkEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
