import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing,
         appRoutingProviders } from './app.routing';
import { LandingModule } from './layouts/landing/landing.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    routing,
    LandingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
