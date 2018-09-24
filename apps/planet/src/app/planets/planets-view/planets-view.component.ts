import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Planet } from '@api/common-data';

@Component({
  selector: 'api-planets-view',
  templateUrl: './planets-view.component.html',
  styleUrls: ['./planets-view.component.css']
})
export class PlanetsViewComponent {
  @Input() planets$: Planet[];

  @Output() selectPlanet = new EventEmitter();
  @Output() deletePlanet = new EventEmitter();

  submitSelectPlanet(planet) {
    this.selectPlanet.emit(planet);
  }

  submitDeletePlanet(planet) {
    this.deletePlanet.emit(planet);
  }
}
