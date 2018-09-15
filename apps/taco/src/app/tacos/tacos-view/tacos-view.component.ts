import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Taco } from '@api/common-data';

@Component({
  selector: 'api-tacos-view',
  templateUrl: './tacos-view.component.html',
  styleUrls: ['./tacos-view.component.css']
})
export class TacosViewComponent {

  @Input() tacos$: Taco[];

  @Output() selectTaco = new EventEmitter();
  @Output() deleteTaco = new EventEmitter();

  submitSelectTaco(taco) {
    this.selectTaco.emit(taco)
  }

  submitDeleteTaco(id) {
    this.deleteTaco.emit(id);
  }

}
