import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerFacade, Player } from '@api/common-data';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'api-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players$: Observable<Player[]> = this.playerFacade.allPlayers$;
  currentPlayer$: Observable<Player> = this.playerFacade.currentPlayer$;
  playerForm: FormGroup;

  constructor(private playerFacade: PlayerFacade, private fb: FormBuilder) {}

  ngOnInit() {
    this.getPlayers();
    this.initPlayerForm();
  }

  initPlayerForm() {
    this.playerForm = this.fb.group({
      id: null,
      name: ['', Validators.required],
      height: ['', Validators.required],
      position: ['', Validators.required],
      number: [null, Validators.required],
      team: ['', Validators.required]
    });
  }

  patchPlayerForm(player) {
    this.playerForm.patchValue(player);
  }

  submitPlayerForm(player) {
    if (!player.id) {
      this.createPlayer(player);
    } else {
      this.updatePlayer(player);
    }
  }

  resetPlayer() {
    this.selectPlayer({ id: null });
    this.initPlayerForm();
  }

  //NGRX GET/CRUD

  getPlayers() {
    this.playerFacade.loadAll();
  }

  selectPlayer(player) {
    this.playerFacade.selectPlayer(player);
  }

  createPlayer(player) {
    this.playerFacade.createPlayer(player);
  }

  updatePlayer(player) {
    this.playerFacade.updatePlayer(player);
  }

  deletePlayer(player) {
    this.playerFacade.deletePlayer(player);
  }
}
