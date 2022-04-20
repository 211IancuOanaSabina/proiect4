import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {ListBetsComponent} from './oders/list-bets/list-bets.component';
import {BetsInfoComponent} from './pages/bets-info/bets-info.component';
import {Page404Component} from "./page404/page404.component";
import {NeedFundsBetsComponent} from "./pages/need-funds-bets/need-funds-bets.component";


const routes: Routes = [
  {path: 'matches', loadChildren: () => import('./matches/matches.module').then(m => m.MatchesModule)},
  {path: 'bets', component: ListBetsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'bets-info', component: BetsInfoComponent},
  {path: 'need-funds', component: NeedFundsBetsComponent},
  {path: '', redirectTo: '/matches', pathMatch: 'full'},
  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
