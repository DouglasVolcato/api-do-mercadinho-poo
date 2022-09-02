export class UpdateProductUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(id, body) {
    return await this.repository.update(id, body);
  }
}
