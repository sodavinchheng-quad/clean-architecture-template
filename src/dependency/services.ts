import { UserEntity } from "../data/entity";
import { IEntityService, UserService } from "../data/service";
import { User } from "../domain/model";

export interface IServices {
  user: IEntityService<UserEntity, User>;
}

export default (): IServices => {
  return {
    user: new UserService(),
  };
};
