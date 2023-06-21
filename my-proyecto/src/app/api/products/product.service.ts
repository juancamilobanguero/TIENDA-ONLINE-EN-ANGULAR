import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  urlApi = `${environment.API_URI}/product`
  productToCreate: Product = new Product()
  allProducts: Product[] = []

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(`${this.urlApi}/product/getProducts`)
  }
  
  createProduct(data: Product){
    return this.http.post(`${this.urlApi}/createProduct`, data)
  }

  updateProduct(data: Product){
    return this.http.put(`${this.urlApi}/updateProduct`, data)
  }
  deleteProduct(_id: string){
    return this.http.delete(`${this.urlApi}/deleteProduct/${_id}`)
  }
}
