import { User } from "../model";

export interface IUserRepository {
  getAllUsers: () => Promise<User[]>;
  getUserById: (id: number) => Promise<User | null>;
}
