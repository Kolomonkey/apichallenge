import { CommonDataModule } from './../../../../libs/common-data/src/lib/common-data.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { VideogamesComponent } from './videogames/videogames.component';
import { VideogamesViewComponent } from './videogames/videogames-view/videogames-view.component';
import { VideogamesDetailsComponent } from './videogames/videogames-details/videogames-details.component';
import { MaterialModule } from '@api/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent, VideogamesComponent, VideogamesViewComponent, VideogamesDetailsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NxModule.forRoot(), MaterialModule, CommonDataModule, ReactiveFormsModule, MatNativeDateModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
