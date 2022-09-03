import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  brand: { type: String },
  photo: { type: String },
});

export const productModel = mongoose.model("product", productsSchema);
