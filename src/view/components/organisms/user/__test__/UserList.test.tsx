import { render, screen } from "@testing-library/react";
import { User } from "../../../../../domain/model";
import { UserList } from "../UserList";

import users from "../../../../../mock/users.json";
import { UserService } from "../../../../../data/service";

const userService = new UserService();

const mockUsers: User[] = users.map(userService.mapEntityToModel);

test("UserList component renders all user information correctly", async () => {
  const onClick = jest.fn();

  render(<UserList users={mockUsers} onClick={onClick} />);

  expect(screen.getByText("User: 1")).toBeInTheDocument();
  expect(screen.getByText("User One")).toBeInTheDocument();
  expect(screen.getByText("userone@example.com")).toBeInTheDocument();
  expect(screen.getByText("+9112800800")).toBeInTheDocument();
  expect(screen.getByText("My Company 1")).toBeInTheDocument();

  expect(screen.getByText("User: 2")).toBeInTheDocument();
  expect(screen.getByText("User Two")).toBeInTheDocument();
  expect(screen.getByText("usertwo@example.com")).toBeInTheDocument();
  expect(screen.getByText("+9112800801")).toBeInTheDocument();
  expect(screen.getByText("My Company 2")).toBeInTheDocument();
});
