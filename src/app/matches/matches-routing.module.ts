import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMatchComponent } from './add-match/add-match.component';
import { DeleteMatchComponent } from './delete-match/delete-match.component';

import { MatchesComponent } from './matches.component';
import { UpdateMatchComponent } from './update-match/update-match.component';
import { ViewAllMatchComponent } from './view-all-match/view-all-match.component';
import { ViewMatchByCategoryComponent } from './view-match-by-category/view-match-by-category.component';
import { ViewMatchByDateComponent } from './view-match-by-date/view-match-by-date.component';
import { ViewMatchComponent } from './view-match/view-match.component';

const routes: Routes = [
  { path: '', component: ViewAllMatchComponent },
  { path: 'add-match', component: AddMatchComponent },
  { path: "view-match", component: ViewMatchComponent },
//{ path: "list-match", component: ViewAllMatchComponent},
  { path: "search", component: ViewMatchByCategoryComponent},
  { path: "today", component: ViewMatchByDateComponent},
  { path: "delete-match", component: DeleteMatchComponent},
  { path: "view-match/:id", component: ViewMatchComponent },
  { path: "update-match/:id", component: UpdateMatchComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class MatchesRoutingModule { }
