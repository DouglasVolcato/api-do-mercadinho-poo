import { ProductRepository } from "../database/repository/productRepository.js";
import * as productServices from "../services/services.index.js";
import * as productMiddlewares from "../middlewares/middlewares.index.js";
import { ProductControllers } from "../controllers/productControllers.js";
import { ProductRoutes } from "../routes/productRoutes.js";

export function makeProductFactory(router) {
  const productRepository = new ProductRepository();

  const createProductUseCase = new productServices.CreateProductUseCase(
    productRepository
  );
  const updateProductUseCase = new productServices.UpdateProductUseCase(
    productRepository
  );
  const deleteProductUseCase = new productServices.DeleteProductUseCase(
    productRepository
  );
  const getProductByIdUseCase = new productServices.GetProductByIdUseCase(
    productRepository
  );
  const getAllProductsUseCase = new productServices.GetAllProductsUseCase(
    productRepository
  );

  const verifyBodyUseCase = new productMiddlewares.VerifyBodyUseCase();
  const verifyItensUseCase = new productMiddlewares.VerifyItensUseCase();
  const verifyIdUseCase = new productMiddlewares.VerifyIdUseCase();

  const productControllers = new ProductControllers(
    {
      createProductUseCase,
      updateProductUseCase,
      deleteProductUseCase,
      getProductByIdUseCase,
      getAllProductsUseCase,
    },
    {
      verifyBodyUseCase,
      verifyItensUseCase,
      verifyIdUseCase,
    }
  );

  const productRoutes = new ProductRoutes(productControllers, router);

  return productRoutes;
}
