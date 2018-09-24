import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonDataModule } from '@api/common-data';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetsViewComponent } from './planets/planets-view/planets-view.component';
import { PlanetsDetailsComponent } from './planets/planets-details/planets-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@api/material';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    PlanetsViewComponent,
    PlanetsDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    MaterialModule,
    CommonDataModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
