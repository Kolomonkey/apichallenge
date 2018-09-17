import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-characters-view',
  templateUrl: './characters-view.component.html',
  styleUrls: ['./characters-view.component.css']
})
export class CharactersViewComponent {

  @Input() allCharacters;
  @Output() selectCharacter = new EventEmitter();
  @Output() deleteCharacter = new EventEmitter();

  submitSelectCharacter(id) {
    this.selectCharacter.emit(id);
  }

  submitDeleteCharacter(character) {
    this.deleteCharacter.emit(character);
  }

}
