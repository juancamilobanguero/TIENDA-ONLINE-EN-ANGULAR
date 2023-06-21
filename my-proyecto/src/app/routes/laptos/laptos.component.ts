import { Component } from '@angular/core';
import { ProductService } from 'src/app/api/products/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-laptos',
  templateUrl: './laptos.component.html',
  styleUrls: ['./laptos.component.css']
})
export class LaptosComponent {
  constructor(public ProductService: ProductService){}

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
   this.ProductService.getProducts().subscribe((data: any) => {
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
}
