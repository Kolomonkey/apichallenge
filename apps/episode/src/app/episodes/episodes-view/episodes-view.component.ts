import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Episode } from '@api/common-data';

@Component({
  selector: 'api-episodes-view',
  templateUrl: './episodes-view.component.html',
  styleUrls: ['./episodes-view.component.css']
})
export class EpisodesViewComponent {
  @Input() episodes$: Episode[];
  @Output() selectEpisode = new EventEmitter();
  @Output() deleteEpisode = new EventEmitter();

  submitSelectEpisode(episode) {
    this.selectEpisode.emit(episode);
  }

  submitDeleteEpisode(episode) {
    this.deleteEpisode.emit(episode);
  }
}
