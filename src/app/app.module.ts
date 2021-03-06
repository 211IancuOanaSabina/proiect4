import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {OdersModule} from './oders/oders.module';
import {SiteLayoutModule} from './components/footer/site-layout/site-layout.module';
import {Page404Component} from "./page404/page404.component";
import {BetCoinStoreModule} from "./store/store.module";
import {Web3ModalModule, Web3ModalService} from '@mindsorg/web3modal-angular';
import {NeedFundsBetsComponent} from "./pages/need-funds-bets/need-funds-bets.component";

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    NeedFundsBetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OdersModule,
    SiteLayoutModule,
    BetCoinStoreModule,
    Web3ModalModule,
  ],
  providers: [{
    provide: Web3ModalService,
    useFactory: () => {
      return new Web3ModalService({
        disableInjectedProvider: false,
        network: "http://127.0.0.1:7545",
        cacheProvider: true,
        providerOptions: {
          injected: {
            display: {
              name: "Metamask",
              description: "Connect with the provider in your Browser"
            },
            package: null
          },
        }
      },)
    }
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
