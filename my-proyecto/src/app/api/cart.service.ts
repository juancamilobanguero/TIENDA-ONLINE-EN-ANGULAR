import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  productos:any[]=[];

  addToCart(producto: any){
    this.productos.push(producto);
  }

  removeFromCart(index:number){
      this.productos.splice(index,1)
  }

  clearCart(){
    this.productos = []
  }

}
