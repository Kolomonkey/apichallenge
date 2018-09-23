import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './../../../random-user/src/app/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@api/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { UsersComponent } from './users/users.component';
import { UsersViewComponent } from './users/users-view/users-view.component';
import { UsersDetailsComponent } from './users/users-details/users-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersViewComponent,
    UsersDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
