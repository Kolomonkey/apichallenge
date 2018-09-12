import { FormBuilder, Validators } from '@angular/forms';
import { Fruit } from './../fruit';
import { ApiService } from '../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'api-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  allFruits: Array<Fruit>;
  selectedFruitName: Fruit;

  constructor(private api: ApiService, private fb: FormBuilder) { }

  fruitForm = this.fb.group({
    id: [],
    name: [''],
    calories: [],
    carbohydrates: [],
    sugar: []
  })

  ngOnInit() {
    this.getFruit()
  }

  selectFruit(fruit) {
    this.selectedFruitName = fruit.name;
    this.fruitForm.patchValue({
      id: fruit.id,
      name: fruit.name,
      calories: fruit.calories,
      carbohydrates: fruit.carbohydrates,
      sugar: fruit.sugar
    });
  }

  submitFruitForm() {
    if(this.fruitForm.value.id === null) {
      this.createFruit({
        name: this.fruitForm.value.name,
        calories: this.fruitForm.value.calories,
        carbohydrates: this.fruitForm.value.carbohydrates,
        sugar: this.fruitForm.value.sugar
      })
    } else {
      this.editFruit({
        id: this.fruitForm.value.id,
        name: this.fruitForm.value.name,
        calories: this.fruitForm.value.calories,
        carbohydrates: this.fruitForm.value.carbohydrates,
        sugar: this.fruitForm.value.sugar
      })
    }
  }

  cancelFruitForm() {
    this.fruitForm.reset()
    this.selectedFruitName = null;
  }

  //API functions
  getFruit() {
    this.api.getFruit()
      .subscribe((res: Array<Fruit>) => this.allFruits = res)
  }

  createFruit(fruit) {
    this.api.createFruit(fruit)
      .subscribe(res => this.getFruit());
  }

  editFruit(fruit) {
    this.api.editFruit(fruit)
      .subscribe(res => this.getFruit())
  }

  deleteFruit(id) {
    this.api.deleteFruit(id)
      .subscribe(res => this.getFruit())
  }

}
