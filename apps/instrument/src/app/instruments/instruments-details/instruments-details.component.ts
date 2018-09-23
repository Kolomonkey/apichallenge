import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-instruments-details',
  templateUrl: './instruments-details.component.html',
  styleUrls: ['./instruments-details.component.css']
})
export class InstrumentsDetailsComponent {
  @Input() currentInstrument$;
  @Input() instrumentForm;

  @Output() submitInstrumentForm = new EventEmitter();
  @Output() resetInstrument = new EventEmitter();

  submitSubmitInstrumentForm(instrument) {
    this.submitInstrumentForm.emit(instrument);
  }

  resetInstrumentForm(form) {
    form.resetForm();
    this.resetInstrument.emit();
  }
}
