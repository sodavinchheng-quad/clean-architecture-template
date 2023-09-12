import { UserService } from "../UserService";
import { User } from "../../../../domain/model";
import users from "../../../../mock/users.json";

test("UserService class maps UserEntity to User model correctly", async () => {
  // TODO: write validation test cases
  const userService = new UserService();

  const user: User = userService.mapEntityToModel(users[0]);

  // Type
  expect(user).toEqual(
    expect.objectContaining({
      id: expect.any(Number),
      name: expect.any(String),
      username: expect.any(String),
      email: expect.any(String),
      tel: expect.any(String),
      website: expect.any(String),
      company: {
        name: expect.any(String),
        catchPhrase: expect.any(String),
      },
      address: {
        suite: expect.any(String),
        street: expect.any(String),
        city: expect.any(String),
        zipcode: expect.any(String),
        latitude: expect.any(String),
        longitude: expect.any(String),
      },
    }),
  );

  // Value
  expect(user).toEqual(
    expect.objectContaining({
      id: 1,
      name: "User One",
      username: "username1",
      email: "userone@example.com",
      tel: "+9112800800",
      website: "www.example.com",
      company: {
        name: "My Company 1",
        catchPhrase: "Catch Phrase",
      },
      address: {
        suite: "123",
        street: "Mango Avenue",
        city: "New York",
        zipcode: "1230001",
        latitude: "27.0021",
        longitude: "138.2902",
      },
    }),
  );
});
