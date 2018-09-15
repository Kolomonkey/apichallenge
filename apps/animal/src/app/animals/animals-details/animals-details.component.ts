import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '@api/common-data';

@Component({
  selector: 'api-animals-details',
  templateUrl: './animals-details.component.html',
  styleUrls: ['./animals-details.component.css']
})
export class AnimalsDetailsComponent {
  @Input() currentAnimal$: Animal;
  @Input() animalForm;

  @Output() submitAnimalForm = new EventEmitter();
  @Output() resetSelectedAnimal = new EventEmitter();

  submitSubmitAnimalForm(animal) {
    this.submitAnimalForm.emit(animal);
  }

  resetAnimal(form) {
    form.reset();
    this.resetSelectedAnimal.emit(null);
  }
}
