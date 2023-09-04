import { User } from "../../../domain/model";

export interface IUserDataSource {
  getAllUsers: () => Promise<User[]>;
  getUserById: (id: number) => Promise<User>;
}
