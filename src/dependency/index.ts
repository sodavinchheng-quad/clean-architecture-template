import drivers from "./drivers";
import repositories from "./repositories";
import usecases from "./usecases";

const cDrivers = drivers();
const cRepositories = repositories(cDrivers);
const cUseCases = usecases(cRepositories);

export default {
  user: {
    getAllUsersUseCase: cUseCases.getAllUsersUseCase,
    getUserByIdUseCase: cUseCases.getUserByIdUseCase,
  },
};
