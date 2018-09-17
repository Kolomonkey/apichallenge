import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://level-up-api-snfwxrkzok.now.sh/pizzas';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  constructor(private http: HttpClient) {}

  getPizzas() {
    return this.http.get(`${BASE_URL}`);
  }

  createPizza(pizza) {
    return this.http.post(`${BASE_URL}`, pizza);
  }

  updatePizza(pizza) {
    return this.http.patch(`${BASE_URL}/${pizza.id}`, pizza);
  }

  deletePizza(pizza) {
    return this.http.delete(`${BASE_URL}/${pizza.id}`);
  }
}
