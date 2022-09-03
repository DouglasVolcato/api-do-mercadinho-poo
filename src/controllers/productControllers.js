export class ProductControllers {
  constructor(services, middlewares) {
    this.services = services;
    this.middlewares = middlewares;
  }

  async createProductController(req, res) {
    try {
      const body = req.body;

      this.middlewares.verifyBodyUseCase.execute(body);

      const foundUser = await this.services.getProductByNameUseCase.execute(
        body.name
      );

      if (!foundUser) {
        const newProduct = await this.services.createProductUseCase.execute({
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
      } else {
        res.status(400).send({ message: "Product name already exists." });
      }
    } catch (err) {
      res
        .status(400)
        .send({ message: "There was an error creating the product." + err });
    }
  }

  async updateProductController(req, res) {
    try {
      const body = req.body;
      const params = req.params;

      this.middlewares.verifyIdUseCase.execute(params);
      this.middlewares.verifyItensUseCase.execute(body);

      const updatedProduct = await this.services.updateProductUseCase.execute(
        params.id,
        {
          name: body.name,
          price: body.price,
          quantity: body.quantity,
          brand: body.brand,
          photo: body.photo,
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

      this.middlewares.verifyIdUseCase.execute(params);

      const deletedProduct = await this.services.deleteProductUseCase.execute(
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

      this.middlewares.verifyIdUseCase.execute(params);

      const foundProduct = await this.services.getProductByIdUseCase.execute(
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
      const products = await this.services.getAllProductsUseCase.execute();

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
