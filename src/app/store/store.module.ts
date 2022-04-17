import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from '@ngxs/store';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {enabledStates} from './state-register';
import {environment} from '../../environments/environment';


@NgModule({
  imports: [
    CommonModule,

    // disabled when building for production
    NgxsModule.forRoot(enabledStates, {
      developmentMode: !environment.production
    }),

    // disabled when building for production
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    }),

    // disabled when building for production
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
  ]
})
export class BetCoinStoreModule {

  public static forRoot(environment: any): ModuleWithProviders<BetCoinStoreModule> {
    return {
      ngModule: BetCoinStoreModule,
      providers: [
        {
          provide: 'env', // you can also use InjectionToken
          useValue: environment
        }
      ]
    };
  }
}
