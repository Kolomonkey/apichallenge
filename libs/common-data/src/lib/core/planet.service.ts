import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  constructor(private http: HttpClient) {}

  getPlanets() {
    return this.http.get(`https://api.myjson.com/bins/lwfwc`);
  }
}
