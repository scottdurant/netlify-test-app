import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

//This is my case 
const routes: Routes = [
    {
        path: 'welcome-screen-component',
        component: WelcomeScreenComponent
    }    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }