export class VerifyItensUseCase {
  execute(body) {
    if (!body && !body.name && !body.price && !body.quantity) {
      throw new Error("Empty fields.");
    }
  }
}
