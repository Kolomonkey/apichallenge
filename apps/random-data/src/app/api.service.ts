import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://app.fakejson.com/q';
const BODY = {
  token: 'XlZzOSEgTw7On7X9Pp4lnw',
  data: {
    id: 'numberInt',
    name: 'name',
    email: 'internetEmail',
    gender: 'personGender',
    company: 'companyName',
    _repeat: 5,
    consistent: false
  }
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.post(`${BASE_URL}`, BODY);
  }
}
