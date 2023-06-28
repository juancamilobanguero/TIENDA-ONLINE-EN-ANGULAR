export class Product {
    //atributos
  
    sku?: string;
    name?: string;
    price?: number;
    stock?: number;
    category?: string;
    description?: string;
    _id?: string;
    imagenes?: string;
    createdAt: any;
    updatedAt: any;
  static value: any;
  
    constructor(
      sku = '',
      name = '',
      price = 0,
      stock = 0,
      category = "",
      description = '',
      _id = '',
      image = '',
      createdAt = "",
      updatedAt = ''
    ) {
      this.sku = sku;
      this.name = name;
      this.price = price;
      this.stock = stock;
      this.category = category;
      this.description = description;
      this._id = _id;
      this.imagenes = image;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  }