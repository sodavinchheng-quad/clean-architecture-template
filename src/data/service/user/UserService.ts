import { User } from "../../../domain/model";
import { UserEntity } from "../../entity";

export class UserService {
  mapUserEntityToUser = (user: UserEntity): User => {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      tel: user.phone,
      website: user.website,
      company: user.company,
      address: user.address,
    };
  };
}
