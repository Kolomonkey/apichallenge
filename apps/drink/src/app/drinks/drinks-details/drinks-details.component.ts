import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Drink } from '@api/common-data';

@Component({
  selector: 'api-drinks-details',
  templateUrl: './drinks-details.component.html',
  styleUrls: ['./drinks-details.component.css']
})
export class DrinksDetailsComponent {

  @Input() currentDrink$: Drink;
  @Input() drinkForm;

  @Output() submitDrinkForm = new EventEmitter();
  @Output() resetCurrentDrink = new EventEmitter();

  submitSubmitDrinkForm(drink) {
    this.submitDrinkForm.emit(drink);
  }

  resetDrinkForm(form) {
    form.reset();
    this.resetCurrentDrink.emit();
  }

}
