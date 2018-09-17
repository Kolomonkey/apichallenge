import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PizzaFacade, Pizza } from '@api/common-data';

@Component({
  selector: 'api-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {
  pizzas$: Observable<Pizza[]> = this.pizzaFacade.allPizzas$;
  currentPizza$: Observable<Pizza> = this.pizzaFacade.currentPizza$;
  pizzaForm: FormGroup;

  constructor(private pizzaFacade: PizzaFacade, private fb: FormBuilder) {}

  ngOnInit() {
    this.getPizzas();
    this.initPizzaForm();
  }

  initPizzaForm() {
    this.pizzaForm = this.fb.group({
      id: null,
      name: '',
      calories: '',
      mainTopping: '',
      secondaryTopping: ''
    });
  }

  patchPizzaForm(pizza) {
    this.pizzaForm.patchValue(pizza);
  }

  submitPizzaForm(pizza) {
    if (!pizza.id) {
      this.createPizza(pizza);
    } else {
      this.updatePizza(pizza);
    }
  }

  resetCurrentPizza() {
    this.selectPizza({ id: null });
  }

  //NGRX GET/CRUD

  getPizzas() {
    this.pizzaFacade.loadAll();
  }

  selectPizza(pizza) {
    this.pizzaFacade.selectPizza(pizza.id);
  }

  createPizza(pizza) {
    this.pizzaFacade.createPizza(pizza);
  }

  updatePizza(pizza) {
    this.pizzaFacade.updatePizza(pizza);
  }

  deletePizza(pizza) {
    this.pizzaFacade.deletePizza(pizza);
  }
}
