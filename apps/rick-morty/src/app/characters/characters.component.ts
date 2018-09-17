import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'api-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  allCharacters = null;
  selectedCharacter: any = {
    name: '',
    status: '',
    species: '',
    image: ''
  };
  characterForm: FormGroup;

  constructor(private api: ApiService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getAllCharacters();
    this.initCharacterForm();
  }

  initCharacterForm() {
    this.characterForm = this.fb.group({
      id: null,
      name: '',
      status: '',
      species: ''
    })
  }

  patchCharacterForm(character) {
    this.characterForm.patchValue(character);
  }

  deleteCharacter(character) {
    console.log(`DELETE CHARACTER: ${character.name}`)
  }

  submitCharacterForm(character) {
    console.log(`SUBMITTED FORM: ${character.name}`)
  }

  resetSelectedCharacter() {
    this.selectedCharacter = {
      name: '',
      status: '',
      species: '',
      image: ''
    };
  }

  getAllCharacters() {
    this.api.getall()
      .subscribe(res => this.allCharacters = res);
  }

  selectCharacter(id) {
    this.api.selectCharacter(id)
      .subscribe(res => {
        // tslint:disable-next-line:no-unused-expression
        this.selectedCharacter = res,
        this.patchCharacterForm(res)
      });
  }

}
