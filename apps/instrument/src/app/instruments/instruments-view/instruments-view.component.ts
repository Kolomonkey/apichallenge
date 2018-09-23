import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Instrument } from '@api/common-data';

@Component({
  selector: 'api-instruments-view',
  templateUrl: './instruments-view.component.html',
  styleUrls: ['./instruments-view.component.css']
})
export class InstrumentsViewComponent {
  @Input() instruments$: Instrument[];

  @Output() selectInstrument = new EventEmitter();
  @Output() deleteInstrument = new EventEmitter();

  submitSelectInstrument(instrument) {
    this.selectInstrument.emit(instrument);
  }

  submitDeleteInstrument(instrument) {
    this.deleteInstrument.emit(instrument);
  }
}
