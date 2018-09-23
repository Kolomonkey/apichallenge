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

export interface AppState {
  todos: fromTodos.TodosState;
  animals: fromAnimals.AnimalState;
  tacos: fromTacos.TacoState;
  pizzas: fromPizzas.PizzaState,
  drinks: fromDrinks.DrinkState,
  players: fromPlayers.PlayerState;
  instruments: fromInstruments.InstrumentState;
}

export const reducers: ActionReducerMap<AppState> = {
  todos: fromTodos.todosReducer,
  animals: fromAnimals.animalReducer,
  tacos: fromTacos.tacoReducer,
  pizzas: fromPizzas.pizzaReducer,
  drinks: fromDrinks.drinkReducer,
  players: fromPlayers.playerReducer,
  instruments: fromInstruments.instrumentReducer
};

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
