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
import { DrinkFacade } from './drink/drink.facade';
import { DrinkEffects } from './drink/drink.effects';
import { PlayerFacade } from './player/player.facade';
import { PlayerEffects } from './player/player.effects';
import { InstrumentFacade } from './instrument/instrument.facade';
import { InstrumentEffects } from './instrument/instrument.effects';
import { PlanetEffects } from './planet/planet.effects';
import { PlanetFacade } from './planet/player.facade';
import { EpisodeEffects } from './episode/episode.effects';
import { EpisodeFacade } from './episode/episode.facade';
import { LocationFacade } from './location/location.facade';
import { LocationEffects } from './location/location.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TodosEffects, AnimalEffects, TacoEffects, PizzaEffects, DrinkEffects, PlayerEffects, InstrumentEffects, PlanetEffects, EpisodeEffects, LocationEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [TodosFacade, AnimalsFacade, TacoFacade, PizzaFacade, DrinkFacade, PlayerFacade, InstrumentFacade, PlanetFacade, EpisodeFacade, LocationFacade]
})
export class StateModule {}
