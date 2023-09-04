import Storage from "../../../core/driver/storage";
import { User } from "../../../domain/model";
import { IUserDataSource } from "./UserDataSource";

export class UserLocalStorageDataSource implements IUserDataSource {
  private _storage;
  constructor() {
    this._storage = new Storage();
  }
  async getAllUsers() {
    return [] as User[];
  }

  async getUserById(id: number) {
    return {} as User;
  }
}
