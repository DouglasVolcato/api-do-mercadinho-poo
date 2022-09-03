export class VerifyIdUseCase {
  execute(params) {
    if (!params || !params.id || params.id === "") {
      throw new Error("Invalid id");
    }
  }
}
