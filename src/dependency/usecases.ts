import { GetAllUsersUseCase, GetUserByIdUseCase } from "../domain/usecase";
import { IRepositories } from "./repositories";

export interface IUseCases {
  getAllUsersUseCase: GetAllUsersUseCase;
  getUserByIdUseCase: GetUserByIdUseCase;
}

export default (repositories: IRepositories): IUseCases => {
  return {
    getAllUsersUseCase: new GetAllUsersUseCase(repositories.user),
    getUserByIdUseCase: new GetUserByIdUseCase(repositories.user),
  };
};
