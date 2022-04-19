import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BetsInfoComponent} from "./bets-info.component";


@NgModule({
  declarations: [
    BetsInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BetsInfoComponent
  ]
})
export class BetsInfoModule {
}
