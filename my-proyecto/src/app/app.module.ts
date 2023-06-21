import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { ProductosComponent } from './component/productos/productos.component';
import { BarraComponent } from './component/barra/barra.component';
import { SecisionComponent } from './component/secision/secision.component';
import { Produc2Component } from './component/produc2/produc2.component';
import { Produc3Component } from './component/produc3/produc3.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { PromocionComponent } from './component/promocion/promocion.component';
import { DescubreComponent } from './component/descubre/descubre.component';
import { CategoriasComponent } from './component/categorias/categorias.component';
import { GamersComponent } from './routes/gamers/gamers.component';
import { GraficasComponent } from './routes/graficas/graficas.component';
import { MonitoresComponent } from './routes/monitores/monitores.component';
import { LaptosComponent } from './routes/laptos/laptos.component';
import { CartComponent } from './cart/cart.component';
import { CrearComponent } from './routes/crear/crear.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductosComponent,
    BarraComponent,
    SecisionComponent,
    Produc2Component,
    Produc3Component,
    FooterComponent,
    LoginComponent,
    PromocionComponent,
    DescubreComponent,
    CategoriasComponent,
    GamersComponent,
    GraficasComponent,
    MonitoresComponent,
    LaptosComponent,
    CartComponent,
    CrearComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
