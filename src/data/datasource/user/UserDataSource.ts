import { UserEntity } from "../../entity";

export interface IUserDataSource {
  getAllUsers: () => Promise<UserEntity[]>;
  getUserById: (id: number) => Promise<UserEntity | null>;
}
