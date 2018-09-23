import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL =
  'https://randomuser.me/api/?inc=gender,name,email,cell&results=5';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${BASE_URL}`);
  }
}
