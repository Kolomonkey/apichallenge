import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { VideogameEffects } from './videogame.effects';

describe('VideogameEffects', () => {
  let actions$: Observable<any>;
  let effects: VideogameEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideogameEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(VideogameEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
