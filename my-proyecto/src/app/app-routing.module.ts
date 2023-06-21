import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamersComponent } from './routes/gamers/gamers.component';
import { GraficasComponent } from './routes/graficas/graficas.component';
import { HomeComponent } from './component/home/home.component';
import { LaptosComponent } from './routes/laptos/laptos.component';
import { MonitoresComponent } from './routes/monitores/monitores.component';
import { CrearComponent } from './routes/crear/crear.component';

const routes: Routes = [
  {path: "",pathMatch:"full",redirectTo:"/home"},
  {path: "home", component: HomeComponent},
  { path:'gamers', component :GamersComponent},
  { path:'graficas', component :GraficasComponent},
  {path: 'laptos', component: LaptosComponent},
  {path: 'monitores',component:MonitoresComponent},
  {path: 'crear',component:CrearComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
