import { TemperaturePipe } from './../../temperature.pipe';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent {
  @Input() weather: Object;

  @Output() updateWeather = new EventEmitter();

  submitForm(temp, humidity) {
    this.updateWeather.emit({ temp, humidity });
  }
}
