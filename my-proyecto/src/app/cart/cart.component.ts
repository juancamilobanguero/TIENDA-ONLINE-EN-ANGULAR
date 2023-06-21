import { Component } from '@angular/core';
import { CartService } from '../api/cart.service';
import { ProductosComponent } from '../component/productos/productos.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
 items:any[] = [];

 constructor(public cartService: CartService){
  this.items = this.cartService.productos;
 }

 removeFromcart(producto:any){
  this.cartService.removeFromCart(producto)
 }
 clearCart() {
  this.cartService.clearCart();
}
}
