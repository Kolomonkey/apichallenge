import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '@api/common-data';

@Component({
  selector: 'api-animals-view',
  templateUrl: './animals-view.component.html',
  styleUrls: ['./animals-view.component.css']
})
export class AnimalsViewComponent {
  @Input() animals$: Animal[];

  @Output() selectAnimal = new EventEmitter();
  @Output() deleteAnimal = new EventEmitter();

  submitSelectAnimal(animal) {
    this.selectAnimal.emit(animal);
  }

  submitDeleteAnimal(animal) {
    this.deleteAnimal.emit(animal);
  }
}
