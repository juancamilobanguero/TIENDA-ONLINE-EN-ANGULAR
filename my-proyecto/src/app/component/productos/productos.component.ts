import { Component } from '@angular/core';
import { ProductService } from 'src/app/api/products/product.service';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/api/cart.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  constructor(public ProductService: ProductService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  cleanCarrito() {
    this.ProductService.productToCreate = new Product();
  }

  createOrUpdateProduct() {
    // revisar los campos
    let data = Product.value

    if (data._id) {
      // actualizar
      this.ProductService.updateProduct(data).subscribe((data:any) => {
        alert('Producto actualizado');
        this.getAllProducts();
      });
      this.cleanCarrito();
      return;
    }

    //crear usuario
    delete data._id;

    this.ProductService.createProduct(data).subscribe((data: any) => {
      console.log({ data });
      this.getAllProducts();
      this.cleanCarrito();
    });
  }

  getAllProducts() {
    this.ProductService.getProducts("productos").subscribe((data: any) => {
      this.ProductService.allProducts = data.result || [];
      console.log(data);
    });
  }

  deleteproduct(_id: string) {
    this.ProductService.deleteProduct(_id).subscribe((data) => {
      alert('Producto eliminado');
      this.getAllProducts();
    });
  }

  updateProduct(product:Product ) {
    this.ProductService.productToCreate = product;
  }
  productos: any[] = [
   
  ];
  guardarCambios(producto: any) {
    let buyChart: any = eval(localStorage.getItem('buyChart')|| '[]') || []
  
    buyChart.push(producto)
    console.log(buyChart)
    localStorage.setItem('buyChart', JSON.stringify(buyChart))
  }
  
  getLaptopProducts(category: string) {
    this.ProductService.getLaptop(category).subscribe((data: any) => {
      this.ProductService.getLaptop = data.result || [];
      console.log(data);
    });
  }
}

