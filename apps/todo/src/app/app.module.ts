import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@api/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { CommonDataModule } from '@api/common-data';
import { TodosComponent } from './todos/todos.component';
import { TodosViewComponent } from './todos/todos-view/todos-view.component';
import { TodosDetailsComponent } from './todos/todos-details/todos-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosViewComponent,
    TodosDetailsComponent
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
