import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-locations-details',
  templateUrl: './locations-details.component.html',
  styleUrls: ['./locations-details.component.css']
})
export class LocationsDetailsComponent {
  @Input() currentLocation$;
  @Input() locationForm;
  @Output() submitLocationForm = new EventEmitter();
  @Output() resetLocation = new EventEmitter();

  submitSubmitLocationForm(location) {
    this.submitLocationForm.emit(location);
  }

  resetLocationForm(form) {
    form.resetForm();
    this.resetLocation.emit();
  }
}
