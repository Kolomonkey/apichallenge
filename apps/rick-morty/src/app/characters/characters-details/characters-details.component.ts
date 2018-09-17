import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.css']
})
export class CharactersDetailsComponent {

  @Input() selectedCharacter;
  @Input() characterForm;

  @Output() submitCharacterForm = new EventEmitter();
  @Output() resetSelectedCharacter = new EventEmitter();

  submitSubmitCharacterForm(character) {
    this.submitCharacterForm.emit(character)
  }

  resetCharacterForm(form) {
    form.reset()
    this.resetSelectedCharacter.emit()
  }

}
