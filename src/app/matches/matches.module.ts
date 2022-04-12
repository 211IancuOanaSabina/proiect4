import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesRoutingModule } from './matches-routing.module';
import { MatchesComponent } from './matches.component';
import { AddMatchComponent } from './add-match/add-match.component';
import { ViewMatchComponent } from './view-match/view-match.component';
import { UpdateMatchComponent } from './update-match/update-match.component';
import { DeleteMatchComponent } from './delete-match/delete-match.component';
import { ViewAllMatchComponent } from './view-all-match/view-all-match.component';
import { ViewMatchByDateComponent } from './view-match-by-date/view-match-by-date.component';
import { ViewMatchByCategoryComponent } from './view-match-by-category/view-match-by-category.component';


@NgModule({
  declarations: [
    MatchesComponent,
    AddMatchComponent,
    ViewMatchComponent,
    UpdateMatchComponent,
    DeleteMatchComponent,
    ViewAllMatchComponent,
    ViewMatchByDateComponent,
    ViewMatchByCategoryComponent
  ],
  imports: [
    CommonModule,
    MatchesRoutingModule
  ]
})
export class MatchesModule { }
