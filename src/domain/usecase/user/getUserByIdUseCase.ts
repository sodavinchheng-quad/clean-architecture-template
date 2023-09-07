import { User } from "../../model";
import { IUserRepository } from "../../repository";

import { IUseCase } from "../Usecase";

export class GetUserByIdUseCase implements IUseCase<number, User | null> {
  private _repository: IUserRepository;
  constructor(repository: IUserRepository) {
    this._repository = repository;
  }

  async execute(id: number) {
    return await this._repository.getUserById(id);
  }
}
