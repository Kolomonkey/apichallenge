import { Fruit } from './../../fruit';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-fruits-details',
  templateUrl: './fruits-details.component.html',
  styleUrls: ['./fruits-details.component.css']
})
export class FruitsDetailsComponent {

  @Input() fruitForm: Fruit;
  @Input() selectedFruitName: Fruit;

  @Output() submitFruitForm = new EventEmitter();
  @Output() cancelFruitForm = new EventEmitter();

  submitSubmitFruitForm() {
    this.submitFruitForm.emit();
  }

  submitCancelFruitForm() {
    this.cancelFruitForm.emit();
  }
}
