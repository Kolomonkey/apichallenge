import { ReactiveFormsModule } from '@angular/forms';
import { CommonDataModule } from '@api/common-data';
import { MaterialModule } from '@api/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { TacosComponent } from './tacos/tacos.component';
import { TacosViewComponent } from './tacos/tacos-view/tacos-view.component';
import { TacosDetailsComponent } from './tacos/tacos-details/tacos-details.component';

@NgModule({
  declarations: [AppComponent, TacosComponent, TacosViewComponent, TacosDetailsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NxModule.forRoot(), MaterialModule, CommonDataModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
