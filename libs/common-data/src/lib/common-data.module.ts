import { TodoService } from './core/todo.service';
import { AnimalService } from './core/animal.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StateModule } from './state/state.module';
import { TacoService } from './core/taco.service';
import { PizzaService } from './core/pizza.service';
import { DrinkService } from './core/drink.service';
import { PlayerService } from './core/player.service';
import { InstrumentService } from './core/instrument.service';
import { PlanetService } from './core/planet.service';
import { EpisodeService } from './core/episode.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, StateModule],
  exports: [StateModule, HttpClientModule],
  providers: [TodoService, AnimalService, TacoService, PizzaService, DrinkService, PlayerService, InstrumentService, PlanetService, EpisodeService]
})
export class CommonDataModule {}
