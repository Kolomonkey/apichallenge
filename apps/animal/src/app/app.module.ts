import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@api/material';
import { CommonDataModule } from '@api/common-data';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalsViewComponent } from './animals/animals-view/animals-view.component';
import { AnimalsDetailsComponent } from './animals/animals-details/animals-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    AnimalsViewComponent,
    AnimalsDetailsComponent
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
