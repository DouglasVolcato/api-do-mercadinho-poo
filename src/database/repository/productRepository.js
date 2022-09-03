import productModel from "../models/productModel.js";

export class ProductRepository {
  async create(body) {
    return await productModel.create(body);
  }

  async delete(idProduct) {
    return await productModel.findOneAndDelete({ id: idProduct });
  }

  async getAll() {
    return await productModel.find();
  }

  async getById(idProduct) {
    return await productModel.findOne({ id: idProduct });
  }

  async update(idProduct, body) {
    return await productModel.findOneAndUpdate({ id: idProduct }, body, {
      new: true,
    });
  }
}
