export class GetProductByIdUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(id) {
    return await this.repository.getById(id);
  }
}
