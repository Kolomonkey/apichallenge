import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-players-details',
  templateUrl: './players-details.component.html',
  styleUrls: ['./players-details.component.css']
})
export class PlayersDetailsComponent {
  @Input() currentPlayer$;
  @Input() playerForm;

  @Output() submitPlayerForm = new EventEmitter();
  @Output() resetPlayer = new EventEmitter();

  submitSubmitPlayerForm(player) {
    this.submitPlayerForm.emit(player);
  }

  resetPlayerForm(form) {
    form.resetForm();
    this.resetPlayer.emit();
  }
}
