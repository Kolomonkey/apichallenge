import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VideogameFacade, Videogame } from '@api/common-data';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'api-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.css']
})
export class VideogamesComponent implements OnInit {
  videogames$: Observable<Videogame[]> = this.videogameFacade.allVideogames$;
  currentVideogame$: Observable<any> = this.videogameFacade.currentVideogame$;
  videogameForm: FormGroup;

  constructor(private videogameFacade: VideogameFacade, private fb: FormBuilder) {}

  ngOnInit() {
    this.getVideogames();
    this.initVideogameForm();
  }

  initVideogameForm() {
    this.videogameForm = this.fb.group({
      id: null,
      name: ['', Validators.required],
      publisher: ['', Validators.required],
      released: ['', Validators.required]
    });
  }

  patchVideogameForm(videogame) {
    this.videogameForm.patchValue(videogame);
  }

  submitVideogameForm(videogame) {
    if (!videogame.id) {
      this.createVideogame(videogame);
    } else {
      this.updateVideogame(videogame);
    }
  }

  resetVideogame() {
    this.selectVideogame({ id: null });
    this.initVideogameForm();
  }

  //NGRX GET/CRUD

  getVideogames() {
    this.videogameFacade.loadAll();
  }

  selectVideogame(videogame) {
    this.videogameFacade.selectVideogame(videogame);
  }

  createVideogame(videogame) {
    this.videogameFacade.createVideogame(videogame);
  }

  updateVideogame(videogame) {
    this.videogameFacade.updateVideogame(videogame);
  }

  deleteVideogame(videogame) {
    this.videogameFacade.deleteVideogame(videogame);
  }
}
