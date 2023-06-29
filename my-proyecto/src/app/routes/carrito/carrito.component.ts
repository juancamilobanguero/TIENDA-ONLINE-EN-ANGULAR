import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/api/cart.service';
import { ProductosComponent } from 'src/app/component/productos/productos.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  productos: any[] = [
    
  ];
 

  constructor(public cartService:CartService) { }

  ngOnInit(): void {
    this.productos = JSON.parse(localStorage.getItem('buyChart') || '[]') || []
    this.cartService.productos = this.productos;
    console.log(this.productos, localStorage.getItem('buyChart'))
  }

  removeFromCart(index: number) {
    this.cartService.eliminarProducto(index);
  }
  calcularTotal(): number {
    let total = 0;

    for (let producto of this.productos) {
      total += producto.precio;
    }

    return total;
  }
}

  
  
