import { fireEvent, render, screen } from "@testing-library/react";
import { UserItem } from "../UserItem";
import { User } from "../../../../../domain/model";

import users from "../../../../../mock/users.json";
import { UserService } from "../../../../../data/service";

const userService = new UserService();

const mockUser: User = userService.mapEntityToModel(users[0]);

test("UserItem component renders user information correctly", async () => {
  const onClick = jest.fn();

  render(<UserItem user={mockUser} onClick={onClick} />);

  expect(screen.getByText("User: 1")).toBeInTheDocument();
  expect(screen.getByText("User One")).toBeInTheDocument();
  expect(screen.getByText("userone@example.com")).toBeInTheDocument();
  expect(screen.getByText("+9112800800")).toBeInTheDocument();
  expect(screen.getByText("My Company 1")).toBeInTheDocument();

  const btn = screen.getByText("Details");
  expect(btn).toBeInTheDocument();

  fireEvent.click(btn);
  expect(onClick).toBeCalled();
});
