import { Component,Input } from '@angular/core';
import { CartService } from 'src/app/api/cart.service';
@Component({
  selector: 'app-produc2',
  templateUrl: './produc2.component.html',
  styleUrls: ['./produc2.component.css']
})
export class Produc2Component {
   @Input() Product:any

   constructor(public CartService: CartService){}

   addToCart(){
    this.CartService.addToCart(this.Product);
    console.log('Producto agregado al carrito')
   }
}
