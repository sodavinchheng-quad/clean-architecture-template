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
      company: {
        name: user.company.name,
        catchPhrase: user.company.catchPhrase,
      },
      address: {
        suite: user.address.suite,
        street: user.address.street,
        city: user.address.city,
        zipcode: user.address.zipcode,
        latitude: user.address.geo.lat,
        longitude: user.address.geo.lng,
      },
    };
  };
}
