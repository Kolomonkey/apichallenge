import { MaterialModule } from './../../../../libs/material/src/lib/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { DrinksComponent } from './drinks/drinks.component';
import { DrinksViewComponent } from './drinks/drinks-view/drinks-view.component';
import { DrinksDetailsComponent } from './drinks/drinks-details/drinks-details.component';
import { CommonDataModule } from '@api/common-data';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, DrinksComponent, DrinksViewComponent, DrinksDetailsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NxModule.forRoot(), MaterialModule, CommonDataModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
