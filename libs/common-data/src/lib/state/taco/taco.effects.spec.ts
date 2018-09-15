import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TacoEffects } from './taco.effects';

describe('TacoEffects', () => {
  let actions$: Observable<any>;
  let effects: TacoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TacoEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(TacoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
