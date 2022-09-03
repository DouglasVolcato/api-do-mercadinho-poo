import express, { Router } from "express";
import cors from "cors";
import { config } from "dotenv";
import { MongoDbConnection } from "./src/database/connection.js";
import { makeProductFactory } from "./src/factories/productFactory.js";
import { Port } from "./src/ports/port";

config();
MongoDbConnection.connectDb();

const app = express();
const router = Router();

const productFactory = makeProductFactory(router);

app.use(express.json());
app.use(cors());

app.use("", productFactory.route());

Port.portConnect(app);
