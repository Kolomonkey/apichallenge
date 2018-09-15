import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AnimalEffects } from './animal.effects';

describe('AnimalEffects', () => {
  let actions$: Observable<any>;
  let effects: AnimalEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimalEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(AnimalEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
