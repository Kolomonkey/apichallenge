import { MaterialModule } from '@api/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { ExchangeComponent } from './exchange/exchange.component';
import { ExchangeViewComponent } from './exchange/exchange-view/exchange-view.component';
import { ExchangeDetailsComponent } from './exchange/exchange-details/exchange-details.component';

@NgModule({
  declarations: [AppComponent, ExchangeComponent, ExchangeViewComponent, ExchangeDetailsComponent],
  imports: [BrowserModule, NxModule.forRoot(), HttpClientModule, MaterialModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
