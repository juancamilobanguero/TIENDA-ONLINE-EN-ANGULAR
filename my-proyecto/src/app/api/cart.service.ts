import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  productos: any[] = [];

  constructor() {
    // Cargar productos desde el Local Storage al iniciar el servicio
    const productosGuardados = localStorage.getItem('carrito');
    if (productosGuardados) {
      this.productos = JSON.parse(productosGuardados);
    }
  }

  agregarProducto(producto: any): void {
    this.productos.push(producto);
    this.actualizarLocalStorage();
  }

  eliminarProducto(index: number): void {
    this.productos.splice(index, 1);
    this.actualizarLocalStorage();
  }

  private actualizarLocalStorage(): void {
    localStorage.setItem('carrito', JSON.stringify(this.productos));
  }

}
