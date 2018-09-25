import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'https://video-games-khnlftutcr.now.sh/videogames';

@Injectable({
  providedIn: 'root'
})
export class VideogameService {
  constructor(private http: HttpClient) {}

  getVideogames() {
    return this.http.get(`${BASE_URL}`)
  }

  createVideogame(videogame) {
    return this.http.post(`${BASE_URL}`, videogame);
  }

  updateVideogame(videogame) {
    return this.http.patch(`${BASE_URL}/${videogame.id}`, videogame);
  }

  deleteVideogame(videogame) {
    return this.http.delete(`${BASE_URL}/${videogame.id}`);
  }
}
