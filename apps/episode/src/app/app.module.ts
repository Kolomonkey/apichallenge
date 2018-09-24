import { MaterialModule } from '@api/material';
import { CommonDataModule } from '@api/common-data';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { EpisodesComponent } from './episodes/episodes.component';
import { EpisodesViewComponent } from './episodes/episodes-view/episodes-view.component';
import { EpisodesDetailsComponent } from './episodes/episodes-details/episodes-details.component';

@NgModule({
  declarations: [AppComponent, EpisodesComponent, EpisodesViewComponent, EpisodesDetailsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NxModule.forRoot(), ReactiveFormsModule, CommonDataModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
