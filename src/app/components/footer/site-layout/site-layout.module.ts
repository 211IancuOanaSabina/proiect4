import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from '../../header/header.component';
import {FooterComponent} from '../footer.component';
import {SidebarComponent} from '../../sidebar/sidebar.component';
import {CurrentBetComponent} from "../../current-bet/current-bet.component";
import {Web3ModalModule} from "@mindsorg/web3modal-angular";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CurrentBetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    Web3ModalModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class SiteLayoutModule {
}
