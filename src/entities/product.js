import { randomUUID } from "node:crypto";

export class Product {
  constructor(product) {
    this.product = product
    this.id = randomUUID();
    this.name = product.name;
    this.price = product.price;
    this.quantity = product.quantity;
    this.brand = product.brand;
    this.photo = product.photo;
  }

  validate() {
    if (!this.product || !this.name || !this.price || !this.quantity) {
      throw new Error(
        "Make sure your product contains at least name, price and quantity fields."
      );
    }
  }

  getProduct() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      brand: this.brand,
      photo: this.photo,
    };
  }
}
