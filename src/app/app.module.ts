import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OdersModule } from './oders/oders.module';
import { SiteLayoutModule } from './components/footer/site-layout/site-layout.module';
import {Page404Component} from "./page404/page404.component";
import {BetCoinStoreModule} from "./store/store.module";

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OdersModule,
    SiteLayoutModule,
    BetCoinStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
