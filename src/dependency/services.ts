import { UserService } from "../data/service";

export interface IServices {
  user: UserService;
}

export default (): IServices => {
  return {
    user: new UserService(),
  };
};
