import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from '@api/common-data';

@Component({
  selector: 'api-pizzas-details',
  templateUrl: './pizzas-details.component.html',
  styleUrls: ['./pizzas-details.component.css']
})
export class PizzasDetailsComponent {
  @Input() currentPizza$: Pizza;
  @Input() pizzaForm;

  @Output() submitPizzaForm = new EventEmitter();
  @Output() resetCurrentPizza = new EventEmitter();

  submitSubmitPizzaForm(pizza) {
    this.submitPizzaForm.emit(pizza);
  }

  resetPizzaForm(form) {
    form.reset();
    this.resetCurrentPizza.emit();
  }
}
