import { ReactiveFormsModule } from '@angular/forms';
import { CommonDataModule } from '@api/common-data';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { PlayersComponent } from './players/players.component';
import { PlayersViewComponent } from './players/players-view/players-view.component';
import { PlayersDetailsComponent } from './players/players-details/players-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@api/material';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayersViewComponent,
    PlayersDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    CommonDataModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
