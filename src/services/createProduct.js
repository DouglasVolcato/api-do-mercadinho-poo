import { Product } from "../entities/product.js";

export class CreateProductUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(body) {
    const newProduct = new Product(body);
    newProduct.validate();
    return await this.repository.create(newProduct.getProduct());
  }
}
