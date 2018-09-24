import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'api-episodes-details',
  templateUrl: './episodes-details.component.html',
  styleUrls: ['./episodes-details.component.css']
})
export class EpisodesDetailsComponent {
  @Input() currentEpisode$;
  @Input() episodeForm;
  @Output() submitEpisodeForm = new EventEmitter();
  @Output() resetEpisode = new EventEmitter();

  submitSubmitEpisodeForm(episode) {
    this.submitEpisodeForm.emit(episode);
  }

  resetEpisodeForm(form) {
    form.resetForm();
    this.resetEpisode.emit();
  }
}
