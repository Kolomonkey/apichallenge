import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@api/material';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { SnippetsComponent } from './snippets/snippets.component';
import { SnippetsViewComponent } from './snippets/snippets-view/snippets-view.component';
import { SnippetsDetailsComponent } from './snippets/snippets-details/snippets-details.component';



@NgModule({
  declarations: [AppComponent, SnippetsComponent, SnippetsViewComponent, SnippetsDetailsComponent],
  imports: [BrowserModule, NxModule.forRoot(), HttpClientModule, MaterialModule, ReactiveFormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
