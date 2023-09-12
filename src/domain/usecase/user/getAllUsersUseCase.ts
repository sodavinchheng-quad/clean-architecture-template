import { User } from "../../model";
import { IUserRepository } from "../../repository";
import { IUseCase } from "../Usecase";

export class GetAllUsersUseCase implements IUseCase<{}, User[]> {
  constructor(private _repository: IUserRepository) {}

  async execute() {
    return await this._repository.getAllUsers();
  }
}
