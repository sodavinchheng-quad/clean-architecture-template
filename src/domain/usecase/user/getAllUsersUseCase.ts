import { User } from "../../model";
import { IUserRepository } from "../../repository";
import { IUseCase } from "../Usecase";

export class GetAllUsersUseCase implements IUseCase<{}, User[]> {
  private _repository: IUserRepository;
  constructor(repository: IUserRepository) {
    this._repository = repository;
  }

  async execute() {
    return await this._repository.getAllUsers();
  }
}
