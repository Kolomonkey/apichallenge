import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'api-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  statesLoading = null;
  citiesLoading = null;

  countries: Array<object> = null;
  states: Array<object> = null;
  cities: Array<object> = null;
  weather: Object = null;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getCountries();
  }

  getLocation() {
    this.api.getLocation().subscribe((res: any) => (this.weather = res.data));
  }

  getCountries() {
    this.api
      .getCountries()
      .subscribe((res: any) => (this.countries = res.data));
  }

  getStates(country) {
    this.states = null;
    this.statesLoading = true;
    this.api.getStates(country).subscribe((res: any) => {
      (this.states = res.data), (this.statesLoading = null);
    });
  }

  getCities(data) {
    this.cities = null;
    this.citiesLoading = true;
    this.api.getCities(data.state, data.country).subscribe((res: any) => {
      (this.cities = res.data), (this.citiesLoading = null);
    });
  }

  getWeather(data) {
    this.api
      .getWeather(data.city, data.state, data.country)
      .subscribe((res: any) => (this.weather = res.data));
  }

  updateWeather(data) {
    console.log(`TEMPERATURE: ${data.temp} | HUMIDITY: ${data.humidity}`);
  }
}
