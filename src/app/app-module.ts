import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeaderComponent } from './header-component/header-component';
import { FooterComponent } from './footer-component/footer-component';
import { AppComponent } from './app-component/app-component';
import { Home } from './home/home';
import { Setting } from './setting/setting';
import { Reports } from './reports/reports';
import { ListUser } from './list-user/list-user';
import { FormsModule } from '@angular/forms';
import {HighlightDirective} from './highlight';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    FooterComponent,
    AppComponent,
    Home,
    Setting,
    Reports,
    ListUser
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HighlightDirective
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
