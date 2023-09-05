export interface UserEntity {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: { bs: string; catchPhrase: string; name: string };
  address: {
    suite: string;
    street: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}
