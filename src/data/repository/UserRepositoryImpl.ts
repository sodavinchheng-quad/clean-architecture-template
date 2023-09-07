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

    return users.map(this._service.mapUserEntityToUser);
  }

  async getUserById(id: number) {
    const user = await this._dataSource.getUserById(id);

    if (!user) return null;

    return this._service.mapUserEntityToUser(user);
  }
}
