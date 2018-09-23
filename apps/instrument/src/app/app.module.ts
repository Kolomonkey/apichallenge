import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@api/material';
import { CommonDataModule } from '@api/common-data';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { InstrumentsComponent } from './instruments/instruments.component';
import { InstrumentsViewComponent } from './instruments/instruments-view/instruments-view.component';
import { InstrumentsDetailsComponent } from './instruments/instruments-details/instruments-details.component';

@NgModule({
  declarations: [AppComponent, InstrumentsComponent, InstrumentsViewComponent, InstrumentsDetailsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NxModule.forRoot(), CommonDataModule, MaterialModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
