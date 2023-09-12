import { User } from "../../domain/model";
import { IUserRepository } from "../../domain/repository";
import { IUserDataSource } from "../datasource/user/UserDataSource";
import { UserEntity } from "../entity";
import { EntityService } from "../service";

export class UserRepositoryImpl implements IUserRepository {
  constructor(
    private _dataSource: IUserDataSource,
    private _service: EntityService<UserEntity, User>,
  ) {}

  async getAllUsers() {
    const users = await this._dataSource.getAllUsers();

    if (users.length > 0) {
      this._service.validateEntityRunType(users[0]);
    }

    return users.map(this._service.mapEntityToModel);
  }

  async getUserById(id: number) {
    const user = await this._dataSource.getUserById(id);

    if (!user) return null;

    this._service.validateEntityRunType(user);

    return this._service.mapEntityToModel(user);
  }
}
