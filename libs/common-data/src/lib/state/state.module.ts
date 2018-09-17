import { TacoFacade } from './taco/taco.facade';
import { TacoEffects } from './taco/taco.effects';
import { AnimalEffects } from './animal/animal.effects';
import { TodosFacade } from './todo/todo.facade';
import { reducers } from '.';
import { TodosEffects } from './todo/todo.effects';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AnimalsFacade } from './animal/animal.facade';
import { PizzaFacade } from './pizza/pizza.facade';
import { PizzaEffects } from './pizza/pizza.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TodosEffects, AnimalEffects, TacoEffects, PizzaEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [TodosFacade, AnimalsFacade, TacoFacade, PizzaFacade]
})
export class StateModule {}
