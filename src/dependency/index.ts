import drivers from "./drivers";
import repositories from "./repositories";
import services from "./services";
import usecases from "./usecases";

const cDrivers = drivers();
const cServices = services();
const cRepositories = repositories(cDrivers, cServices);
const cUseCases = usecases(cRepositories);

export default {
  user: {
    getAllUsersUseCase: cUseCases.getAllUsersUseCase,
    getUserByIdUseCase: cUseCases.getUserByIdUseCase,
  },
};
