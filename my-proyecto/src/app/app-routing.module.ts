import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamersComponent } from './routes/gamers/gamers.component';
import { GraficasComponent } from './routes/graficas/graficas.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'gamers', component: GamersComponent },
  { path: 'graficas', component: GraficasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
