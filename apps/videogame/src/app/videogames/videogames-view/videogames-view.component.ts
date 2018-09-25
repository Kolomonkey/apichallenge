import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Videogame } from '@api/common-data';

@Component({
  selector: 'api-videogames-view',
  templateUrl: './videogames-view.component.html',
  styleUrls: ['./videogames-view.component.css']
})
export class VideogamesViewComponent {
  @Input() videogames$: Videogame[];

  @Output() selectVideogame = new EventEmitter();
  @Output() deleteVideogame = new EventEmitter();

  submitSelectVideogame(videogame) {
    this.selectVideogame.emit(videogame);
  }

  submitDeleteVideogame(videogame) {
    this.deleteVideogame.emit(videogame);
  }
}
