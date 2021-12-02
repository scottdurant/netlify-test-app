import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'welcome-screen', component: WelcomeScreenComponent },
  { path: 'game', component: GameComponent },
  { path: '', redirectTo: '/welcome-screen', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
