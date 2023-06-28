import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamersComponent } from './routes/gamers/gamers.component';
import { GraficasComponent } from './routes/graficas/graficas.component';
import { HomeComponent } from './component/home/home.component';
import { LaptosComponent } from './routes/laptos/laptos.component';
import { MonitoresComponent } from './routes/monitores/monitores.component';
import { CrearComponent } from './routes/crear/crear.component';
import { IngresarComponent } from './routes/ingresar/ingresar.component';
import { userGuard } from './guards/user/user.guard';
import { adminGuard } from './guards/admin/admin.guard';
import { AdminComponent } from './routes/admin/admin.component';
import { PromocionesComponent } from './routes/promociones/promociones.component';
import { CarritoComponent } from './routes/carrito/carrito.component';

const routes: Routes = [
  {path: "",pathMatch:"full",redirectTo:"/home"},
  {path: "home", component: HomeComponent,canActivate:[userGuard]},
  { path:'gamers', component :GamersComponent},
  { path:'graficas', component :GraficasComponent},
  {path: 'laptos', component: LaptosComponent},
  {path: 'monitores',component:MonitoresComponent},
  {path: 'crear',component:CrearComponent},
  {path: 'ingresar',component:IngresarComponent},
  {path: 'admin',component: AdminComponent,canActivate:[userGuard,adminGuard]},
  {path: 'promociones', component:PromocionesComponent},
  {path: 'carrito',component:CarritoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
