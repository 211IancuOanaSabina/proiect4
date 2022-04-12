import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelModule404 } from './404-rel/404-rel.module';
import { ForgotComponent } from './forgot-rel/forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { ListBetsComponent } from './oders/list-bets/list-bets.component';
import { RegisterComponent } from './register-rel/register/register.component';

const routes: Routes = [
  { path: 'matches', loadChildren: () => import('./matches/matches.module').then(m => m.MatchesModule) },
  { path: 'bets', component:ListBetsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotComponent},
  { path: '', component: RelModule404},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
