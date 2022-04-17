import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ListBetsComponent } from './oders/list-bets/list-bets.component';


const routes: Routes = [
  { path: 'matches', loadChildren: () => import('./matches/matches.module').then(m => m.MatchesModule) },
  { path: 'bets', component:ListBetsComponent },
  { path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
