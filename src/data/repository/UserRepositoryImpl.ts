import { IUserRepository } from "../../domain/repository";
import { IUserDataSource } from "../datasource/user/UserDataSource";
import { UserService } from "../service";

export class UserRepositoryImpl implements IUserRepository {
  private _dataSource: IUserDataSource;
  private _service: UserService;
  constructor(dataSource: IUserDataSource, service: UserService) {
    this._dataSource = dataSource;
    this._service = service;
  }

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

    return this._service.mapEntityToModel(user);
  }
}
