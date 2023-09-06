import { UserEntity } from "../../entity";
import { IUserDataSource } from "./UserDataSource";

import users from "../../../mock/users.json";

export class UserMockDataSource implements IUserDataSource {
  async getAllUsers() {
    return users as UserEntity[];
  }

  async getUserById(id: number) {
    return users.find((user) => user.id === id) as UserEntity;
  }
}
