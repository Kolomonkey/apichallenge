import { MaterialModule } from '@api/material';
import { CommonDataModule } from '@api/common-data';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { LocationsComponent } from './locations/locations.component';
import { LocationsViewComponent } from './locations/locations-view/locations-view.component';
import { LocationsDetailsComponent } from './locations/locations-details/locations-details.component';

@NgModule({
  declarations: [AppComponent, LocationsComponent, LocationsViewComponent, LocationsDetailsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NxModule.forRoot(), ReactiveFormsModule, CommonDataModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
