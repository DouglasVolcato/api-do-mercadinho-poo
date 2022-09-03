export class VerifyBodyUseCase {
  execute(body) {
    if (!body || !body.name || !body.price || !body.quantity) {
      throw new Error(
        "Make sure your product contains at least name, price and quantity fields."
      );
    }
  }
}
