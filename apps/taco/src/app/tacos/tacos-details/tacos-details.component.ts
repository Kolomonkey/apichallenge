import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Taco } from '@api/common-data';

@Component({
  selector: 'api-tacos-details',
  templateUrl: './tacos-details.component.html',
  styleUrls: ['./tacos-details.component.css']
})
export class TacosDetailsComponent {

  @Input() currentTaco$: Taco;
  @Input() tacoForm;

  @Output() submitTacoForm = new EventEmitter();
  @Output() resetCurrentTaco = new EventEmitter();

  resetTacoForm(form) {
    form.reset();
    this.resetCurrentTaco.emit();
  }

  submitSubmitTacoForm(taco) {
    this.submitTacoForm.emit(taco);
  }

}
