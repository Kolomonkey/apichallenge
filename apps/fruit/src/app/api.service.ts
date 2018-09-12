import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'https://level-up-api-rpjdxzwbqn.now.sh/fruits'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getFruit() {
    return this.http.get(`${BASE_URL}`)
  }

  createFruit(fruit) {
    return this.http.post(`${BASE_URL}`, fruit)
  }

  editFruit(fruit) {
    return this.http.patch(`${BASE_URL}/${fruit.id}`, fruit)
  }

  deleteFruit(id) {
    return this.http.delete(`${BASE_URL}/${id}`)
  }
}
