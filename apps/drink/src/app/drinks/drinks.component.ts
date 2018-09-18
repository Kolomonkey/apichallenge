import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { DrinkFacade, Drink } from '@api/common-data';

@Component({
  selector: 'api-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  drinks$: Observable<Drink[]> = this.drinkFacade.allDrinks$;
  currentDrink$: Observable<Drink> = this.drinkFacade.currentDrink$;
  drinkForm: FormGroup;

  constructor(private drinkFacade: DrinkFacade, private fb: FormBuilder) { }

  ngOnInit() {
    this.getDrinks();
    this.initDrinkForm();
  }

  initDrinkForm() {
    this.drinkForm = this.fb.group({
      id: null,
      name: '',
      caffeine: null,
      sugar: null,
      founder: ''
    });
  }

  patchDrinkForm(drink) {
    this.drinkForm.patchValue(drink);
  }

  submitDrinkForm(drink) {
    if (!drink.id) {
      this.createDrink(drink);
    } else {
      this.updateDrink(drink)
    }
  }

  resetCurrentDrink() {
    this.selectDrink({ id: null });
  }

  //NGRX GET/CRUD

  getDrinks() {
    this.drinkFacade.loadAll();
  }

  selectDrink(drink) {
    this.drinkFacade.selectDrink(drink.id);
  }

  createDrink(drink) {
    this.drinkFacade.createDrink(drink);
  }

  updateDrink(drink) {
    this.drinkFacade.updateDrink(drink);
  }

  deleteDrink(drink) {
    this.drinkFacade.deleteDrink(drink);
  }
}
