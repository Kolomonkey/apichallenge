import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@api/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PizzasViewComponent } from './pizzas/pizzas-view/pizzas-view.component';
import { PizzasDetailsComponent } from './pizzas/pizzas-details/pizzas-details.component';
import { CommonDataModule } from '@api/common-data';

@NgModule({
  declarations: [
    AppComponent,
    PizzasComponent,
    PizzasViewComponent,
    PizzasDetailsComponent
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
