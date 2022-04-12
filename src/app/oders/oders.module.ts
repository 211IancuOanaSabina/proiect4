import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBetsComponent } from './list-bets/list-bets.component';


@NgModule({
  declarations: [
    ListBetsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListBetsComponent
  ]
})
export class OdersModule { }
