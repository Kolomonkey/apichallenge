import { Fruit } from './../../fruit';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-fruits-view',
  templateUrl: './fruits-view.component.html',
  styleUrls: ['./fruits-view.component.css']
})
export class FruitsViewComponent {

  @Input() allFruits: Array<Fruit>;

  @Output() selectFruit = new EventEmitter();
  @Output() deleteFruit = new EventEmitter();

  submitSelectFruit(fruit) {
    this.selectFruit.emit(fruit);
  }

  submitDeleteFruit(id) {
    this.deleteFruit.emit(id);
  }

}
