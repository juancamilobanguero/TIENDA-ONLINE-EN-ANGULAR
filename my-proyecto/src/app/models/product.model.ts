export class Product {
    //atributos
  
    sku?: string;
    name?: string;
    price?: number;
    stock?: number;
    category?: any[];
    description?: string;
    _id?: string;
    image?: string;
    createdAt: any;
    updatedAt: any;
  
    constructor(
      sku = '',
      name = '',
      price = 0,
      stock = 0,
      category = [],
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
      this.image = image;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  }