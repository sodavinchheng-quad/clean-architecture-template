import { UserApiDataSource } from "../data/datasource";
import { UserRepositoryImpl } from "../data/repository";
import { UserService } from "../data/service";
import { IUserRepository } from "../domain/repository";
import { IDriver } from "./drivers";

export interface IRepositories {
  user: IUserRepository;
}

export default (drivers: IDriver): IRepositories => {
  return {
    user: new UserRepositoryImpl(
      new UserApiDataSource(drivers.http),
      new UserService(),
    ),
  };
};
