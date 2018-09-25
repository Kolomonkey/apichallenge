import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationFacade, Location } from '@api/common-data';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'api-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations$: Observable<Location[]> = this.locationFacade.allLocations$;
  currentLocation$: Observable<Location> = this.locationFacade.currentLocation$;
  locationForm: FormGroup;

  constructor(private locationFacade: LocationFacade, private fb: FormBuilder) {}

  ngOnInit() {
    this.getLocations();
    this.initLocationForm();
  }

  initLocationForm() {
    this.locationForm = this.fb.group({
      id: null,
      name: ['', Validators.required],
      type: ['', Validators.required],
      dimension: ['', Validators.required]
    });
  }

  patchLocationForm(location) {
    this.locationForm.patchValue(location);
  }

  submitLocationForm(location) {
    if (!location.id) {
      this.createLocation(location);
    } else {
      this.updateLocation(location);
    }
  }

  resetLocation() {
    this.selectLocation({ id: null });
    this.initLocationForm();
  }

  //NGRX GET/CRUD

  getLocations() {
    this.locationFacade.loadAll();
  }
  selectLocation(location) {
    this.locationFacade.selectLocation(location);
  }
  createLocation(location) {
    this.locationFacade.createLocation(location);
  }
  updateLocation(location) {
    this.locationFacade.updateLocation(location);
  }
  deleteLocation(location) {
    this.locationFacade.deleteLocation(location);
  }
}
