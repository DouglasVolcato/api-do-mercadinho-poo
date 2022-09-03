import * as middlewares from "../middlewares/middlewares.index";
import * as services from "../services/services.index";

export class ProductControllers {
  constructor(services, middlewares) {
    this.services = services;
    this.middlewares = middlewares;
  }

  async createProductController(req, res) {
    try {
      const body = req.body;

      middlewares.VerifyBodyUseCase.execute(body);

      const newProduct = await services.CreateProductUseCase.execute({
        name: body.name,
        price: body.price,
        quantity: body.quantity,
        brand: body.brand ?? "",
        photo: body.photo ?? "",
      });

      if (newProduct) {
        res.status(200).send(newProduct);
      } else {
        res
          .status(400)
          .send({ message: "There was an error creating the product." });
      }
    } catch (err) {
      res
        .status(400)
        .send({ message: "There was an error creating the product." });
    }
  }

  async updateProductController(req, res) {
    try {
      const body = req.body;
      const params = req.params;

      middlewares.VerifyIdUseCase.execute(params);
      middlewares.VerifyItensUseCase.execute(body);

      const updatedProduct = await services.UpdateProductUseCase.execute(
        params.id,
        {
          name: body.name,
          price: body.price,
          quantity: body.quantity,
          brand: body.brand ?? "",
          photo: body.photo ?? "",
        }
      );

      if (updatedProduct) {
        res.status(200).send(updatedProduct);
      } else {
        res.status(404).send({ message: "Product not found." });
      }
    } catch (err) {
      res
        .status(400)
        .send({ message: "There was an error updating the product." });
    }
  }

  async deleteProductController(req, res) {
    try {
      const params = req.params;

      middlewares.VerifyIdUseCase.execute(params);

      const deletedProduct = await services.DeleteProductUseCase.execute(
        params.id
      );

      if (deletedProduct) {
        res.status(200).send(deletedProduct);
      } else {
        res.status(404).send({ message: "Product not found." });
      }
    } catch (err) {
      res
        .status(400)
        .send({ message: "There was a problem deleting the product." });
    }
  }

  async getProductByIdController(req, res) {
    try {
      const params = req.params;

      middlewares.VerifyIdUseCase.execute(params);

      const foundProduct = await services.GetProductByIdUseCase.execute(
        params.id
      );

      if (foundProduct) {
        res.status(200).send(foundProduct);
      } else {
        res.status(404).send({ message: "Product not found." });
      }
    } catch (err) {
      res
        .status(400)
        .send({ message: "There was a problem finding the product." });
    }
  }

  async getAllProductsController(req, res) {
    try {
      const products = await services.GetAllProductsUseCase.execute();

      if (products) {
        res.status(200).send(products);
      } else {
        res.status(404).send({ message: "Products not found." });
      }
    } catch (err) {
      res
        .status(400)
        .send({ message: "There was a problem finding the products." });
    }
  }
}
