import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-videogames-details',
  templateUrl: './videogames-details.component.html',
  styleUrls: ['./videogames-details.component.css']
})
export class VideogamesDetailsComponent {
  @Input() currentVideogame$;
  @Input() videogameForm;

  @Output() submitVideogameForm = new EventEmitter();
  @Output() resetVideogame = new EventEmitter();

  submitSubmitVideogameForm(videogame) {
    this.submitVideogameForm.emit(videogame);
  }

  resetVideogameForm(form) {
    form.resetForm();
    this.resetVideogame.emit();
  }
}
