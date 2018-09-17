import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@api/material';
import { ApiService } from './api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { CharactersComponent } from './characters/characters.component';
import { CharactersViewComponent } from './characters/characters-view/characters-view.component';
import { CharactersDetailsComponent } from './characters/characters-details/characters-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, CharactersComponent, CharactersViewComponent, CharactersDetailsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NxModule.forRoot(), MaterialModule, ReactiveFormsModule, HttpClientModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
