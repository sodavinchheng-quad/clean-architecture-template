import { Number, Record, Static, String } from "runtypes";

const Geo = Record({
  lat: String,
  lng: String,
});

const Address = Record({
  suite: String,
  street: String,
  city: String,
  zipcode: String,
  geo: Geo,
});

const Company = Record({
  bs: String,
  catchPhrase: String,
  name: String,
});

export const UserRunType = Record({
  id: Number,
  name: String,
  username: String,
  email: String,
  phone: String,
  website: String,
  company: Company,
  address: Address,
});

export type UserEntity = Static<typeof UserRunType>;
