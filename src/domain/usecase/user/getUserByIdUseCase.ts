import { User } from "../../model";
import { IUserRepository } from "../../repository";

import { IUseCase } from "../Usecase";

export class GetUserByIdUseCase implements IUseCase<number, User | null> {
  constructor(private _repository: IUserRepository) {}

  async execute(id: number) {
    return await this._repository.getUserById(id);
  }
}
