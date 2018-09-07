import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

const BASE_URL = 'https://forex.1forge.com/1.0.3';
const API_KEY = 'udP1KM70VlhNldCDiSfOJFn2svFXMOVK';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  currencyPairs() {
    return this.http.get(`${BASE_URL}/symbols?api_key=${API_KEY}`);
  }

  currencyDetails(pair) {
    return this.http.get(`${BASE_URL}/quotes?pairs=${pair}&api_key=${API_KEY}`)
  }

}
