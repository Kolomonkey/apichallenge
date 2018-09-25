import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';

const BASE_URL = 'https://rickandmortyapi.com/api/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getLocations() {
    return this.http.get(`${BASE_URL}/1,2,3,4,5`)
  }
}
