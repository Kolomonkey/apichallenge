import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://rickandmortyapi.com/api/character/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getall() {
    return this.http.get(`${BASE_URL}1,2,3,4,5,6`);
  }

  selectCharacter(id) {
    return this.http.get(`${BASE_URL}${id}`);
  }
}
