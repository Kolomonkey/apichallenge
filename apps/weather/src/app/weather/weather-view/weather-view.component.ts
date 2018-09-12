import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.css']
})
export class WeatherViewComponent {
  @Input() statesLoading;
  @Input() citiesLoading;

  @Input() countries: Array<object>;
  @Input() states: Array<object>;
  @Input() cities: Array<object>;

  @Output() getLocation = new EventEmitter();
  @Output() selectCountry = new EventEmitter();
  @Output() selectState = new EventEmitter();
  @Output() getWeather = new EventEmitter();

  submitGetLocation() {
    this.getLocation.emit();
  }

  submitSelectedCountry(country) {
    this.selectCountry.emit(country);
  }

  submitSelectedState(state, country) {
    this.selectState.emit({ state, country });
  }

  submitGetWeather(city, state, country) {
    this.getWeather.emit({ city, state, country });
  }
}
