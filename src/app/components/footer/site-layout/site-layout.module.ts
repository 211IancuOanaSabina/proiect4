import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../footer.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import {CurrentBetComponent} from "../../current-bet/current-bet.component";
import {FormsModule} from "@angular/forms";

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
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class SiteLayoutModule { }
