export class ProductRoutes {
  constructor(controller, router) {
    this.controller = controller;
    this.router = router;
  }

  route() {
    this.router.get("/", (req, res) =>
      this.controller.getAllProductsController(req, res)
    );
    this.router.get("/product/:id", (req, res) =>
      this.controller.getProductByIdController(req, res)
    );
    this.router.delete("/delete/:id", (req, res) =>
      this.controller.deleteProductController(req, res)
    );
    this.router.post("/create", (req, res) =>
      this.controller.createProductController(req, res)
    );
    this.router.put("/update/:id", (req, res) =>
      this.controller.updateProductController(req, res)
    );

    return this.router;
  }
}
