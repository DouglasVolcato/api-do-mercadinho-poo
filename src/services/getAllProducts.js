export class getAllProducts {
  constructor(repository) {
    this.repository = repository;
  }

  async execute() {
    return await this.repository.getAll();
  }
}
