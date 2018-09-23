import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InstrumentFacade, Instrument } from '@api/common-data';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'api-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})
export class InstrumentsComponent implements OnInit {

  instruments$: Observable<Instrument[]> = this.instrumentFacade.allInstruments$;
  currentInstrument$: Observable<Instrument> = this.instrumentFacade.currentInstrument$;
  instrumentForm: FormGroup;

  constructor(private instrumentFacade: InstrumentFacade, private fb: FormBuilder) {}

  ngOnInit() {
    this.getInstruments();
    this.initInstrumentForm();
  }

  initInstrumentForm() {
    this.instrumentForm = this.fb.group({
      id: null,
      name: ['', Validators.required],
      year: ['', Validators.required],
      inventor: ['', Validators.required],
      country: [null, Validators.required],
    });
  }

  patchInstrumentForm(instrument) {
    this.instrumentForm.patchValue(instrument);
  }

  submitInstrumentForm(instrument) {
    if (!instrument.id) {
      this.createInstrument(instrument);
    } else {
      this.updateInstrument(instrument);
    }
  }

  resetInstrument() {
    this.selectInstrument({ id: null });
    this.initInstrumentForm();
  }

  //NGRX GET/CRUD

  getInstruments() {
    this.instrumentFacade.loadAll();
  }

  selectInstrument(instrument) {
    this.instrumentFacade.selectInstrument(instrument);
  }

  createInstrument(instrument) {
    this.instrumentFacade.createInstrument(instrument);
  }

  updateInstrument(instrument) {
    this.instrumentFacade.updateInstrument(instrument);
  }

  deleteInstrument(instrument) {
    this.instrumentFacade.deleteInstrument(instrument);
  }
}
