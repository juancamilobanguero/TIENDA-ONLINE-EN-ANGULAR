import { Component } from '@angular/core';
import { CartService } from 'src/app/api/cart.service';

@Component({
  selector: 'app-gamers',
  templateUrl: './gamers.component.html',
  styleUrls: ['./gamers.component.css']
})
export class GamersComponent {
  constructor(public CartService:CartService){}
  addToCart(){
    this.CartService.addToCart('this.product');
    console.log('Producto agregado al carrito')
   }
}
