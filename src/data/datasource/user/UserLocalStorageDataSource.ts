import { IStorage } from "../../../core/driver/storage";
import { User } from "../../../domain/model";
import { IUserDataSource } from "./UserDataSource";

export class UserLocalStorageDataSource implements IUserDataSource {
  private _storage;
  constructor(storage: IStorage) {
    this._storage = storage;
  }
  async getAllUsers() {
    return [] as User[];
  }

  async getUserById(id: number) {
    return {} as User;
  }
}
