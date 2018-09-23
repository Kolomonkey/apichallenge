import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '@api/common-data';

@Component({
  selector: 'api-players-view',
  templateUrl: './players-view.component.html',
  styleUrls: ['./players-view.component.css']
})
export class PlayersViewComponent {
  @Input() players$: Player[];

  @Output() selectPlayer = new EventEmitter();
  @Output() deletePlayer = new EventEmitter();

  submitSelectPlayer(player) {
    this.selectPlayer.emit(player);
  }

  submitDeletePlayer(player) {
    this.deletePlayer.emit(player);
  }
}
