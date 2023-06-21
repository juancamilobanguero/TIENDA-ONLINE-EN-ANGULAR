import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-produc3',
  templateUrl: './produc3.component.html',
  styleUrls: ['./produc3.component.css']
})
export class Produc3Component {
  @Input() produc3:any

  addToCart (){
   console.log('Producto agregado al carrito');
  }
}
