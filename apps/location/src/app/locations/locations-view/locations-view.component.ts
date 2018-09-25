import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@api/common-data';

@Component({
  selector: 'api-locations-view',
  templateUrl: './locations-view.component.html',
  styleUrls: ['./locations-view.component.css']
})
export class LocationsViewComponent {
  @Input() locations$: Location[];
  @Output() selectLocation = new EventEmitter();
  @Output() deleteLocation = new EventEmitter();

  submitSelectLocation(location) {
    this.selectLocation.emit(location);
  }

  submitDeleteLocation(location) {
    this.deleteLocation.emit(location);
  }
}
