import { UserEntity } from "../data/entity";
import { EntityService, UserService } from "../data/service";
import { User } from "../domain/model";

export interface IServices {
  user: EntityService<UserEntity, User>;
}

export default (): IServices => {
  return {
    user: new UserService(),
  };
};
