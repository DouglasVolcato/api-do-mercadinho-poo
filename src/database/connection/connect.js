import mongoose from "mongoose";

export class MongoDbConnection {
  static async connectDb() {
    await mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Connected to MongoDb"))
      .catch((err) => console.log("Error: " + err));
  }
}
