import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from '@ngrx/store';
import * as fromTodos from './todo/todo.reducer';
import * as fromAnimals from './animal/animal.reducer';
import * as fromTacos from './taco/taco.reducer';
import * as fromPizzas from './pizza/pizza.reducer';
import * as fromDrinks from './drink/drink.reducer';
import * as fromPlayers from './player/player.reducer';
import * as fromInstruments from './instrument/instrument.reducer';
import * as fromPlanets from './planet/planet.reducer';
import * as fromEpisodes from './episode/episode.reducer';
import * as fromLocations from './location/location.reducer';
import * as fromVideogames from './videogame/videogame.reducer';

export interface AppState {
  todos: fromTodos.TodosState;
  animals: fromAnimals.AnimalState;
  tacos: fromTacos.TacoState;
  pizzas: fromPizzas.PizzaState,
  drinks: fromDrinks.DrinkState,
  players: fromPlayers.PlayerState;
  instruments: fromInstruments.InstrumentState;
  planets: fromPlanets.PlanetState;
  episodes: fromEpisodes.EpisodeState;
  locations: fromLocations.LocationState;
  videogames: fromVideogames.VideogameState;
}

export const reducers: ActionReducerMap<AppState> = {
  todos: fromTodos.todosReducer,
  animals: fromAnimals.animalReducer,
  tacos: fromTacos.tacoReducer,
  pizzas: fromPizzas.pizzaReducer,
  drinks: fromDrinks.drinkReducer,
  players: fromPlayers.playerReducer,
  instruments: fromInstruments.instrumentReducer,
  planets: fromPlanets.planetReducer,
  episodes: fromEpisodes.episodeReducer,
  locations: fromLocations.locationReducer,
  videogames: fromVideogames.videogameReducer
};

//VIDEOGAME SELECTORS
export const selectVideogameVideogamesState = createFeatureSelector<fromVideogames.VideogameState>(
  'videogames'
);

export const selectVideogameIds = createSelector(
  selectVideogameVideogamesState,
  fromVideogames.selectVideogameIds
)

export const selectVideogameEntities = createSelector(
  selectVideogameVideogamesState,
  fromVideogames.selectVideogameEntities
)

export const selectAllVideogames = createSelector(
  selectVideogameVideogamesState,
  fromVideogames.selectAllVideogames
)

export const selectVideogameTotal = createSelector(
  selectVideogameVideogamesState,
  fromVideogames.selectVideogameTotal
)

export const selectCurrentVideogameId = createSelector(
  selectVideogameVideogamesState,
  fromVideogames.getSelectedVideogameId
)

export const selectCurrentVideogame = createSelector(
  selectVideogameEntities,
  selectCurrentVideogameId,
  (videogameEntities, videogameId) => {
    const emptyVideogame = {
      id: null,
      name: '',
      publisher: '',
      released: ''
    };
    return videogameId ? videogameEntities[videogameId] : emptyVideogame;
  }
)

export const isVideogamesLoading = createSelector(
  selectVideogameVideogamesState,
  fromVideogames.isLoading
)

//LOCATION SELECTORS

export const selectLocationLocationsState = createFeatureSelector<fromLocations.LocationState>(
  'locations'
);

export const selectLocationIds = createSelector(
  selectLocationLocationsState,
  fromLocations.selectLocationIds
);

export const selectLocationEntities = createSelector(
  selectLocationLocationsState,
  fromLocations.selectLocationEntities
);

export const selectAllLocations = createSelector(
  selectLocationLocationsState,
  fromLocations.selectAllLocations
);

export const selectLocationTotal = createSelector(
  selectLocationLocationsState,
  fromLocations.selectLocationTotal
);

export const selectCurrentLocationId = createSelector(
  selectLocationLocationsState,
  fromLocations.getSelectedLocationId
)

export const selectCurrentLocation = createSelector(
  selectLocationEntities,
  selectCurrentLocationId,
  (locationEntities, locationId) => {
    const emptyLocation = {
      id: null,
      name: '',
      type: '',
      dimension: ''
    };
    return locationId ? locationEntities[locationId] : emptyLocation;
  }
)

//PLANET SELECTORS

export const selectEpisodeEpisodesState = createFeatureSelector<fromEpisodes.EpisodeState>(
  'episodes'
);

export const selectEpisodeIds = createSelector(
  selectEpisodeEpisodesState,
  fromEpisodes.selectEpisodeIds
);

export const selectEpisodeEntities = createSelector(
  selectEpisodeEpisodesState,
  fromEpisodes.selectEpisodeEntities
);

export const selectAllEpisodes = createSelector(
  selectEpisodeEpisodesState,
  fromEpisodes.selectAllEpisodes
);

export const selectEpisodeTotal = createSelector(
  selectEpisodeEpisodesState,
  fromEpisodes.selectEpisodeTotal
);

export const selectCurrentEpisodeId = createSelector(
  selectEpisodeEpisodesState,
  fromEpisodes.getSelectedEpisodeId
)

export const selectCurrentEpisode = createSelector(
  selectEpisodeEntities,
  selectCurrentEpisodeId,
  (episodeEntities, episodeId) => {
    const emptyEpisode = {
      name: '',
      climate: '',
      population: null
    };
    return episodeId ? episodeEntities[episodeId] : emptyEpisode;
  }
)


//PLANET SELECTORS

export const selectPlanetPlanetsState = createFeatureSelector<fromPlanets.PlanetState>(
  'planets'
);

export const selectPlanetIds = createSelector(
  selectPlanetPlanetsState,
  fromPlanets.selectPlanetIds
);

export const selectPlanetEntities = createSelector(
  selectPlanetPlanetsState,
  fromPlanets.selectPlanetEntities
);

export const selectAllPlanets = createSelector(
  selectPlanetPlanetsState,
  fromPlanets.selectAllPlanets
);

export const selectPlanetTotal = createSelector(
  selectPlanetPlanetsState,
  fromPlanets.selectPlanetTotal
);

export const selectCurrentPlanetId = createSelector(
  selectPlanetPlanetsState,
  fromPlanets.getSelectedPlanetId
)

export const selectCurrentPlanet = createSelector(
  selectPlanetEntities,
  selectCurrentPlanetId,
  (planetEntities, planetId) => {
    const emptyPlanet = {
      name: '',
      climate: '',
      population: null
    };
    return planetId ? planetEntities[planetId] : emptyPlanet;
  }
)

//INSTRUMENT SELECTORS

export const selectInstrumentInstrumentsState = createFeatureSelector<fromInstruments.InstrumentState>(
  'instruments'
);

export const selectInstrumentIds = createSelector(
  selectInstrumentInstrumentsState,
  fromInstruments.selectInstrumentIds
);

export const selectInstrumentEntities = createSelector(
  selectInstrumentInstrumentsState,
  fromInstruments.selectInstrumentEntities
);

export const selectAllInstruments = createSelector(
  selectInstrumentInstrumentsState,
  fromInstruments.selectAllInstruments
);

export const selectInstrumentTotal = createSelector(
  selectInstrumentInstrumentsState,
  fromInstruments.selectInstrumentTotal
);

export const selectCurrentInstrumentId = createSelector(
  selectInstrumentInstrumentsState,
  fromInstruments.getSelectedInstrumentId
)

export const selectCurrentInstrument = createSelector(
  selectInstrumentEntities,
  selectCurrentInstrumentId,
  (instrumentEntities, instrumentId) => {
    const emptyInstrument = {
      id: null,
      name: '',
      year: '',
      inventor: '',
      country: ''
    };
    return instrumentId ? instrumentEntities[instrumentId] : emptyInstrument;
  }
)

//PLAYER SELECTORS

export const selectPlayerPlayersState = createFeatureSelector<fromPlayers.PlayerState>(
  'players'
);

export const selectPlayerIds = createSelector(
  selectPlayerPlayersState,
  fromPlayers.selectPlayerIds
);

export const selectPlayerEntities = createSelector(
  selectPlayerPlayersState,
  fromPlayers.selectPlayerEntities
);

export const selectAllPlayers = createSelector(
  selectPlayerPlayersState,
  fromPlayers.selectAllPlayers
);

export const selectPlayerTotal = createSelector(
  selectPlayerPlayersState,
  fromPlayers.selectPlayerTotal
);

export const selectCurrentPlayerId = createSelector(
  selectPlayerPlayersState,
  fromPlayers.getSelectedPlayerId
)

export const selectCurrentPlayer = createSelector(
  selectPlayerEntities,
  selectCurrentPlayerId,
  (playerEntities, playerId) => {
    const emptyPlayer = {
      id: null,
      name: '',
      height: '',
      position: '',
      number: null,
      team: ''
    };
    return playerId ? playerEntities[playerId] : emptyPlayer;
  }
)

//DRINK SELECTORS

export const selectDrinkDrinksState = createFeatureSelector<fromDrinks.DrinkState>(
  'drinks'
);

export const selectDrinkIds = createSelector(
  selectDrinkDrinksState,
  fromDrinks.selectDrinkIds
)

export const selectDrinkEntities = createSelector(
  selectDrinkDrinksState,
  fromDrinks.selectDrinkEntities
)

export const selectAllDrinks = createSelector(
  selectDrinkDrinksState,
  fromDrinks.selectAllDrinks
);

export const selectDrinkTotal = createSelector(
  selectDrinkDrinksState,
  fromDrinks.selectDrinkTotal
)

export const selectCurrentDrinkId = createSelector(
  selectDrinkDrinksState,
  fromDrinks.getSelectedDrinkId
)

export const selectCurrentDrink = createSelector(
  selectDrinkEntities,
  selectCurrentDrinkId,
  (drinkEntities, drinkId) => {
    const emptyDrink = {
      id: null,
      name: '',
      caffeine: null,
      sugar: null,
      founder: ''
    };
    return drinkId ? drinkEntities[drinkId] : emptyDrink;
  }
)


//PIZZA SELECTORS

export const selectPizzaPizzasState = createFeatureSelector<fromPizzas.PizzaState>(
  'pizzas'
);

export const selectPizzaIds = createSelector(
  selectPizzaPizzasState,
  fromPizzas.selectPizzaIds
)

export const selectPizzaEntities = createSelector(
  selectPizzaPizzasState,
  fromPizzas.selectPizzaEntities
)

export const selectAllPizzas = createSelector(
  selectPizzaPizzasState,
  fromPizzas.selectAllPizzas
)

export const selectPizzaTotal = createSelector(
  selectPizzaPizzasState,
  fromPizzas.selectPizzaTotal
)

export const selectCurrentPizzaId = createSelector(
  selectPizzaPizzasState,
  fromPizzas.getSelectedPizzaId
)

export const selectCurrentPizza = createSelector(
  selectPizzaEntities,
  selectCurrentPizzaId,
  (pizzaEntities, pizzaId) => {
    const emptyPizza = {
      id: null,
      name: '',
      calories: null,
      mainTopping: '',
      secondaryTopping: ''
    };
    return pizzaId ? pizzaEntities[pizzaId] : emptyPizza;
  }
)

//TACO SELECTORS

export const selectTacoTacosState = createFeatureSelector<fromTacos.TacoState>(
  'tacos'
);

export const selectTacoIds = createSelector(
  selectTacoTacosState,
  fromTacos.selectTacoIds
);

export const selectTacoEntities = createSelector(
  selectTacoTacosState,
  fromTacos.selectTacoEntities
);

export const selectAllTacos = createSelector(
  selectTacoTacosState,
  fromTacos.selectAllTacos
);

export const selectTacoTotal = createSelector(
  selectTacoTacosState,
  fromTacos.selectTacoTotal
);

export const selectCurrentTacoId = createSelector(
  selectTacoTacosState,
  fromTacos.getSelectedTacoId
);

export const selectCurrentTaco = createSelector(
  selectTacoEntities,
  selectCurrentTacoId,
  (tacoEntities, tacoId) => {
    const emptyTaco = {
      id: null,
      name: '',
      calories: null,
      protein: '',
      salsa: ''
    };
    return tacoId ? tacoEntities[tacoId] : emptyTaco;
  }
);

//ANIMALS SELECTORS

export const selectAnimalAnimalsState = createFeatureSelector<
  fromAnimals.AnimalState
>('animals');

export const selectAnimalIds = createSelector(
  selectAnimalAnimalsState,
  fromAnimals.selectAnimalIds
);

export const selectAnimalEntities = createSelector(
  selectAnimalAnimalsState,
  fromAnimals.selectAnimalEntities
);

export const selectAllAnimals = createSelector(
  selectAnimalAnimalsState,
  fromAnimals.selectAllAnimals
);

export const selectAnimalTotal = createSelector(
  selectAnimalAnimalsState,
  fromAnimals.selectAnimalTotal
);

export const selectCurrentAnimalId = createSelector(
  selectAnimalAnimalsState,
  fromAnimals.getSelectedAnimalId
);

export const selectCurrentAnimal = createSelector(
  selectAnimalEntities,
  selectCurrentAnimalId,
  (animalEntities, animalId) => {
    const emptyAnimal = {
      id: null,
      height: '',
      mass: null,
      name: '',
      continent: ''
    };
    return animalId ? animalEntities[animalId] : emptyAnimal;
  }
);

//TODOS SELECTORS

export const selectTodoTodosState = createFeatureSelector<fromTodos.TodosState>(
  'todos'
);

export const selectTodoIds = createSelector(
  selectTodoTodosState,
  fromTodos.selectTodoIds
);

export const selectTodoEntities = createSelector(
  selectTodoTodosState,
  fromTodos.selectTodoEntities
);

export const selectAllTodos = createSelector(
  selectTodoTodosState,
  fromTodos.selectAllTodos
);

export const selectTodoTotal = createSelector(
  selectTodoTodosState,
  fromTodos.selectTodoTotal
);

export const selectCurrentTodoId = createSelector(
  selectTodoTodosState,
  fromTodos.getSelectedTodoId
);

export const selectCurrectTodo = createSelector(
  selectTodoEntities,
  selectCurrentTodoId,
  (todoEntities, todoId) => {
    const emptyTodo = {
      id: null,
      date: '',
      important: null,
      title: '',
      description: ''
    };
    return todoId ? todoEntities[todoId] : emptyTodo;
  }
);
