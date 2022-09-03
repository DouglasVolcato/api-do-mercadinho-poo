import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  brand: { type: String },
  photo: { type: String },
});

export const Product = mongoose.model("product", productsSchema);
