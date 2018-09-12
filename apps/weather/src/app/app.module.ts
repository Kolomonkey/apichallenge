import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@api/material';
import { FormsModule } from '@angular/forms';

import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { WeatherComponent } from './weather/weather.component';
import { WeatherViewComponent } from './weather/weather-view/weather-view.component';
import { WeatherDetailsComponent } from './weather/weather-details/weather-details.component';
import { TemperaturePipe } from './temperature.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherViewComponent,
    WeatherDetailsComponent,
    TemperaturePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
