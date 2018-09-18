import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Drink } from '@api/common-data';

@Component({
  selector: 'api-drinks-view',
  templateUrl: './drinks-view.component.html',
  styleUrls: ['./drinks-view.component.css']
})
export class DrinksViewComponent {

  @Input() drinks$: Drink[];

  @Output() selectDrink = new EventEmitter();
  @Output() deleteDrink = new EventEmitter();

  submitSelectDrink(drink) {
    this.selectDrink.emit(drink);
  }

  submitDeleteDrink(drink) {
    this.deleteDrink.emit(drink);
  }
}
