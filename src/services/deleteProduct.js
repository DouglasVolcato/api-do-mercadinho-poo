export class DeleteProductUseCase {
  constructor(repository) {
    this.repository = repository;
  }
  async execute(id) {
    return await this.repository.delete(id);
  }
}
