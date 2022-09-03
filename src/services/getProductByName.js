export class GetProductByNameUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(name) {
    return await this.repository.getByName(name);
  }
}
