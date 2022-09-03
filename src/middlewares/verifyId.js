export class VerifyIdUseCase {
  execute(body) {
    if (!body || !body.id || body.id === "") {
      throw new Error("Invalid id");
    }
  }
}
