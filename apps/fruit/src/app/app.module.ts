import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@api/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { FruitsComponent } from './fruits/fruits.component';
import { FruitsViewComponent } from './fruits/fruits-view/fruits-view.component';
import { FruitsDetailsComponent } from './fruits/fruits-details/fruits-details.component';

@NgModule({
  declarations: [AppComponent, FruitsComponent, FruitsViewComponent, FruitsDetailsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NxModule.forRoot(), MaterialModule, HttpClientModule, ReactiveFormsModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
