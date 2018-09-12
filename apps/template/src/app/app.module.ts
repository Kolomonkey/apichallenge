import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { ComponentComponent } from './component/component.component';
import { ComponentViewComponent } from './component/component-view/component-view.component';
import { ComponentDetailsComponent } from './component/component-details/component-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    ComponentViewComponent,
    ComponentDetailsComponent
  ],
  imports: [BrowserModule, NxModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
