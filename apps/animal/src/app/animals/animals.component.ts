import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AnimalsFacade, Animal } from '@api/common-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'api-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  animals$: Observable<Animal[]> = this.animalsFacade.allAnimals$;
  currentAnimal$: Observable<Animal> = this.animalsFacade.currentAnimal$;
  animalForm: FormGroup;

  constructor(
    private animalsFacade: AnimalsFacade,
    private form: FormBuilder
  ) {}

  ngOnInit() {
    this.getAnimals();
    this.initAnimalForm();
  }

  initAnimalForm() {
    this.animalForm = this.form.group({
      id: [],
      height: [''],
      mass: [],
      name: [''],
      continent: ['']
    });
  }

  patchAnimalForm(animal) {
    this.animalForm.patchValue(animal);
  }

  submitAnimalForm(animal) {
    this.selectAnimal(null);
    if (!animal.id) {
      this.addAnimal(animal);
    } else {
      this.updateAnimal(animal);
    }
  }

  // NGRX Get/CRUD calls

  getAnimals() {
    this.animalsFacade.loadAll();
  }

  selectAnimal(id) {
    this.animalsFacade.selectAnimal(id);
  }

  addAnimal(animal) {
    this.animalsFacade.addAnimal(animal);
  }

  updateAnimal(animal) {
    this.animalsFacade.updateAnimal(animal);
  }

  deleteAnimal(animal) {
    this.animalsFacade.deleteAnimal(animal);
  }
}
