import { UserApiDataSource } from "../data/datasource";
import { UserRepositoryImpl } from "../data/repository";
import { IUserRepository } from "../domain/repository";
import { IDriver } from "./drivers";
import { IServices } from "./services";

export interface IRepositories {
  user: IUserRepository;
}

export default (drivers: IDriver, services: IServices): IRepositories => {
  return {
    user: new UserRepositoryImpl(
      new UserApiDataSource(drivers.http),
      services.user,
    ),
  };
};
