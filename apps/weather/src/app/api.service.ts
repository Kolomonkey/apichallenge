import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'https://api.airvisual.com/v2';
const PARAMS = new HttpParams().set('key', 'jJz9xcxGZbZFwExRZ');

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getLocation() {
    return this.http.get(`${BASE_URL}/nearest_city`, { params: PARAMS });
  }

  getCountries() {
    return this.http.get(`${BASE_URL}/countries`, { params: PARAMS });
  }

  getStates(country) {
    return this.http.get(`${BASE_URL}/states`, {
      params: PARAMS.append('country', country)
    });
  }

  getCities(state, country) {
    return this.http.get(`${BASE_URL}/cities`, {
      params: PARAMS.append('state', state).append('country', country)
    });
  }

  getWeather(city, state, country) {
    return this.http.get(`${BASE_URL}/city`, {
      params: PARAMS.append('city', city)
        .append('state', state)
        .append('country', country)
    });
  }
}
