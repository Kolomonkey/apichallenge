import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from '@api/common-data';

@Component({
  selector: 'api-pizzas-view',
  templateUrl: './pizzas-view.component.html',
  styleUrls: ['./pizzas-view.component.css']
})
export class PizzasViewComponent {
  @Input() pizzas$: Pizza[];

  @Output() selectPizza = new EventEmitter();
  @Output() deletePizza = new EventEmitter();

  submitSelectPizza(pizza) {
    this.selectPizza.emit(pizza);
  }

  submitDeletePizza(pizza) {
    this.deletePizza.emit(pizza);
  }
}
