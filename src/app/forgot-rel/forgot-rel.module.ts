import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotComponent } from './forgot/forgot.component';



@NgModule({
  declarations: [
    ForgotComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ ForgotComponent]
})
export class ForgotRelModule { }
