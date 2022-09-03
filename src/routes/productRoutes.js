export class ProductRoutes {
  constructor(controller, router) {
    this.controller = controller;
    this.router = router;
  }

  route() {
    this.router.get("/", controller.getAllProductsController(req, res));
    this.router.get(
      "/product/:id",
      controller.getProductByIdController(req, res)
    );
    this.router.delete(
      "/delete/:id",
      controller.deleteProductController(req, res)
    );
    this.router.post("/create", controller.createProductController(req, res));
    this.router.put(
      "/update/:id",
      controller.updateProductController(req, res)
    );

    return this.router;
  }
}
