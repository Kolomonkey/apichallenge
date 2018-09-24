import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-planets-details',
  templateUrl: './planets-details.component.html',
  styleUrls: ['./planets-details.component.css']
})
export class PlanetsDetailsComponent {
  @Input() currentPlanet$;
  @Input() planetForm;

  @Output() submitPlanetForm = new EventEmitter();
  @Output() resetPlanet = new EventEmitter();

  submitSubmitPlanetForm(planet) {
    this.submitPlanetForm.emit(planet);
  }

  resetPlanetForm(form) {
    form.resetForm();
    this.resetPlanet.emit();
  }
}
