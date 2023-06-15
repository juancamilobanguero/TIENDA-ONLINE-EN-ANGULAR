import { Component } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  categorias = [
    {
      nombre: 'Categoría 1',
      productos: [
        { nombre: 'Producto 1', descripcion: 'Descripción del Producto 1', imagen: 'ruta-de-la-imagen-1' },
        { nombre: 'Producto 2', descripcion: 'Descripción del Producto 2', imagen: 'ruta-de-la-imagen-2' },
        // Agrega más productos
      ]
    },
    {
      nombre: 'Categoría 2',
      productos: [
        { nombre: 'Producto 3', descripcion: 'Descripción del Producto 3', imagen: 'ruta-de-la-imagen-3' },
        { nombre: 'Producto 4', descripcion: 'Descripción del Producto 4', imagen: 'ruta-de-la-imagen-4' },
        // Agrega más productos
      ]
    },
    // Agrega más categorías
  ];
}
