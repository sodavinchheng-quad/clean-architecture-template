import { IStorage } from "../../../core/driver/storage";
import { UserEntity } from "../../entity";
import { IUserDataSource } from "./UserDataSource";

export class UserLocalStorageDataSource implements IUserDataSource {
  private _storage;
  constructor(storage: IStorage) {
    this._storage = storage;
  }
  async getAllUsers() {
    return [] as UserEntity[];
  }

  async getUserById(id: number) {
    return {} as UserEntity;
  }
}
