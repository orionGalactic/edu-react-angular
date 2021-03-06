import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { RentalModule } from './rentals/rental.module';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
  ],
  imports: [
    RentalModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
