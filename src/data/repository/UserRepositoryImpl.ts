import { IUserRepository } from "../../domain/repository";
import { IUserDataSource } from "../datasource/user/UserDataSource";

export class UserRepositoryImpl implements IUserRepository {
  private _dataSource: IUserDataSource;
  constructor(dataSource: IUserDataSource) {
    this._dataSource = dataSource;
  }

  async getAllUsers() {
    return await this._dataSource.getAllUsers();
  }

  async getUserById(id: number) {
    return await this._dataSource.getUserById(id);
  }
}
