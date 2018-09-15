import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://level-up-api-snfwxrkzok.now.sh/tacos';

@Injectable({
  providedIn: 'root'
})
export class TacoService {
  constructor(private http: HttpClient) {}

  getTacos() {
    return this.http.get(`${BASE_URL}`);
  }

  addTaco(taco) {
    return this.http.post(`${BASE_URL}`, taco);
  }

  updateTaco(taco) {
    return this.http.patch(`${BASE_URL}/${taco.id}`, taco);
  }

  deleteTaco(taco) {
    return this.http.delete(`${BASE_URL}/${taco.id}`);
  }
}
