interface Address {
  suite: string;
  street: string;
  city: string;
  zipcode: string;
  latitude: string;
  longitude: string;
}

interface Company {
  name: string;
  catchPhrase: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  tel: string;
  website: string;
  company: Company;
  address: Address;
}
