import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EpisodeFacade, Episode } from '@api/common-data';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'api-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  episodes$: Observable<Episode[]> = this.episodeFacade.allEpisodes$;
  currentEpisode$: Observable<any> = this.episodeFacade.currentEpisode$;
  episodeForm: FormGroup;

  constructor(private episodeFacade: EpisodeFacade, private fb: FormBuilder) {}

  ngOnInit() {
    this.getEpisodes();
    this.initEpisodeForm();
  }

  initEpisodeForm() {
    this.episodeForm = this.fb.group({
      id: null,
      name: ['', Validators.required],
      "air_date": ['', Validators.required],
      episode: [null, Validators.required]
    });
  }

  patchEpisodeForm(episode) {
    this.episodeForm.patchValue(episode);
  }

  submitEpisodeForm(episode) {
    if (!episode.id) {
      this.createEpisode(episode);
    } else {
      this.updateEpisode(episode);
    }
  }

  resetEpisode() {
    this.selectEpisode({ id: null });
    this.initEpisodeForm();
  }

  //NGRX GET/CRUD

  getEpisodes() {
    this.episodeFacade.loadAll();
  }
  selectEpisode(episode) {
    this.episodeFacade.selectEpisode(episode);
  }
  createEpisode(episode) {
    this.episodeFacade.createEpisode(episode);
  }
  updateEpisode(episode) {
    this.episodeFacade.updateEpisode(episode);
  }
  deleteEpisode(episode) {
    this.episodeFacade.deleteEpisode(episode);
  }
}
