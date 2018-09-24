import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://rickandmortyapi.com/api/episode/';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  constructor(private http: HttpClient) {}

  getEpisodes() {
    return this.http.get(`${BASE_URL}1,2,3,4,5`);
  }
}
