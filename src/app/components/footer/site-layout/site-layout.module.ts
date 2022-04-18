import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../footer.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import {AppModule} from "../../../app.module";
import {CurrentBetComponent} from "../../current-bet/current-bet.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CurrentBetComponent
  ],
    imports: [
        CommonModule,
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class SiteLayoutModule { }
