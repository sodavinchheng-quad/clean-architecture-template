import { IStorage } from "../../../core/driver/storage";
import { UserEntity } from "../../entity";
import { IUserDataSource } from "./UserDataSource";

export class UserLocalStorageDataSource implements IUserDataSource {
  constructor(private _storage: IStorage) {}

  async getAllUsers() {
    return [] as UserEntity[];
  }

  async getUserById(id: number) {
    return {} as UserEntity;
  }
}
