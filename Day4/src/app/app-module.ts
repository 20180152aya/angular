import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Parent } from './Compentent/parent/parent';
import { Child } from './Compentent/child/child';
import { FormsModule } from '@angular/forms';
import { Sharedservices } from './Servies/sharedservices';

@NgModule({
  declarations: [
    App,
    Parent,
    Child
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    Sharedservices
  ],
  bootstrap: [App]
})
export class AppModule { }
