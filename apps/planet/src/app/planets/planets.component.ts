import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlanetFacade, Planet } from '@api/common-data';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'api-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets$: Observable<Planet[]> = this.planetFacade.allPlanets$;
  currentPlanet$: Observable<any> = this.planetFacade.currentPlanet$;
  planetForm: FormGroup;

  constructor(private planetFacade: PlanetFacade, private fb: FormBuilder) {}

  ngOnInit() {
    this.getPlanets();
    this.initPlanetForm();
  }

  initPlanetForm() {
    this.planetForm = this.fb.group({
      id: null,
      name: ['', Validators.required],
      climate: ['', Validators.required],
      population: [null, Validators.required]
    });
  }

  patchPlanetForm(planet) {
    this.planetForm.patchValue(planet);
  }

  submitPlanetForm(planet) {
    if (!planet.id) {
      this.createPlanet(planet);
    } else {
      this.updatePlanet(planet);
    }
  }

  resetPlanet() {
    this.selectPlanet({ id: null });
    this.initPlanetForm();
  }

  //NGRX GET/CRUD

  getPlanets() {
    this.planetFacade.loadAll();
  }

  selectPlanet(planet) {
    this.planetFacade.selectPlanet(planet);
  }

  createPlanet(planet) {
    this.planetFacade.createPlanet(planet);
  }

  updatePlanet(planet) {
    this.planetFacade.updatePlanet(planet);
  }

  deletePlanet(planet) {
    this.planetFacade.deletePlanet(planet);
  }
}
