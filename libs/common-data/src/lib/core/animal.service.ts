import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'https://level-up-api-qllahajrnz.now.sh/animals';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  constructor(private http: HttpClient) {}

  getAnimals() {
    return this.http.get(`${BASE_URL}`);
  }

  createAnimal(animal) {
    return this.http.post(`${BASE_URL}`, animal);
  }

  updateAnimal(animal) {
    return this.http.patch(`${BASE_URL}/${animal.id}`, animal);
  }

  deleteAnimal(animal) {
    return this.http.delete(`${BASE_URL}/${animal.id}`);
  }
}
