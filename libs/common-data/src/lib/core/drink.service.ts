import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'https://level-up-api-zderqmkwsj.now.sh/drinks';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  constructor(private http: HttpClient) {}

  getDrinks() {
    return this.http.get(`${BASE_URL}`);
  }

  createDrink(drink) {
    return this.http.post(`${BASE_URL}`, drink);
  }

  updateDrink(drink) {
    return this.http.patch(`${BASE_URL}/${drink.id}`, drink);
  }

  deleteDrink(drink) {
    return this.http.delete(`${BASE_URL}/${drink.id}`);
  }
}
