import { Component, OnInit } from '@angular/core';
import { TacoFacade } from '@api/common-data';
import { Taco } from '@api/common-data';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'api-tacos',
  templateUrl: './tacos.component.html',
  styleUrls: ['./tacos.component.css']
})
export class TacosComponent implements OnInit {

  tacos$: Observable<Taco[]> = this.tacoFacade.allTacos$;
  currentTaco$: Observable<Taco> = this.tacoFacade.currentTaco$;
  tacoForm: FormGroup;

  constructor(private tacoFacade: TacoFacade, private fb: FormBuilder) { }

  ngOnInit() {
    this.getTacos()
    this.initTacoForm();
  }

  initTacoForm() {
    this.tacoForm = this.fb.group({
      id: [],
      name: [''],
      calories: [],
      protein: [''],
      salsa: ['']
    })
  }

  patchTacoForm(taco) {
    this.tacoForm.patchValue(taco);
  }

  submitTacoForm(taco) {
    this.resetCurrentTaco();
    if (!taco.id) {
      this.addTaco(taco);
    } else {
      this.updateTaco(taco);
    }
  }

  resetCurrentTaco() {
    this.selectTaco({id: null});
  }

  // GET/CRUD NGRX Operations

  getTacos() {
    this.tacoFacade.loadAll();
  }

  selectTaco(taco) {
    this.tacoFacade.selectTaco(taco.id);
  }

  addTaco(taco) {
    this.tacoFacade.addTaco(taco);
  }

  updateTaco(taco) {
    this.tacoFacade.updateTaco(taco);
  }

  deleteTaco(taco) {
    this.tacoFacade.deleteTaco(taco);
  }
}
