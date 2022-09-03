export class ProductControllers {
  constructor(services, middlewares) {
    this.services = services;
    this.middlewares = middlewares;
  }

  async createProductController(req, res) {
    try {
      const body = req.body;

      middlewares.verifyBodyUseCase.execute(body);

      const newProduct = await services.createProductUseCase.execute({
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

      middlewares.verifyIdUseCase.execute(params);
      middlewares.verifyItensUseCase.execute(body);

      const updatedProduct = await services.updateProductUseCase.execute(
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

      middlewares.verifyIdUseCase.execute(params);

      const deletedProduct = await services.deleteProductUseCase.execute(
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

      middlewares.verifyIdUseCase.execute(params);

      const foundProduct = await services.getProductByIdUseCase.execute(
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
      const products = await services.getAllProductsUseCase.execute();

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
