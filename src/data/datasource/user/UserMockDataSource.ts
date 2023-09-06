import { IUserDataSource } from "./UserDataSource";

import users from "../../../mock/users.json";

export class UserMockDataSource implements IUserDataSource {
  async getAllUsers() {
    return users;
  }

  async getUserById(id: number) {
    return users.find((user) => user.id === id) ?? null;
  }
}
