import { User } from "../../../domain/model";
import { UserEntity, UserRunType } from "../../entity";
import { EntityService } from "../EntityService";
import { TypeValidationService } from "../common";

export class UserService implements EntityService<UserEntity, User> {
  private _validator: TypeValidationService;
  constructor() {
    this._validator = new TypeValidationService();
  }

  validateEntityRunType = (user: UserEntity) => {
    this._validator.validate(UserRunType, user);
  };

  mapEntityToModel = (user: UserEntity): User => {
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
