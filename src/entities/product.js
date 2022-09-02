import { randomUUID } from "node:crypto";

export class Product {
  constructor(product) {
    this.id = randomUUID();
    this.name = product.name;
    this.price = product.price;
    this.quantity = product.quantity;
    this.brand = product.brand;
    this.photo = product.photo;
  }

  validate() {
    if (!product) {
      throw new Error("Invalid product");
    } else if (!this.name || !this.price || !this.quantity) {
      throw new Error(
        "Make sure your product contains at least name, price and quantity fields."
      );
    }
  }

  getProduct() {
    return {
      id: this.id,
      name: this.name,
      price: this.id,
      quantity: this.quantity,
      brand: this.brand,
      photo: this.photo,
    };
  }
}
