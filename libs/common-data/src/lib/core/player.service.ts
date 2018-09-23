import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://level-up-api-varwfvewcd.now.sh/players';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(private http: HttpClient) {}

  getPlayers() {
    return this.http.get(`${BASE_URL}`);
  }

  createPlayer(player) {
    return this.http.post(`${BASE_URL}`, player);
  }

  updatePlayer(player) {
    return this.http.patch(`${BASE_URL}/${player.id}`, player);
  }

  deletePlayer(player) {
    return this.http.delete(`${BASE_URL}/${player.id}`);
  }
}
