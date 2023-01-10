import { CompSinc142Module } from './comp-sinc14-2/comp-sinc14-2.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompSinc142Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
