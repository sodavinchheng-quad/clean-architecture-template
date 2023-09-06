import { render, screen } from "@testing-library/react";
import { UserItem } from "../UserItem";
import { User } from "../../../../../domain/model";

const mockUser: User = {
  id: 1,
  name: "User One",
  username: "username",
  email: "userone@example.com",
  tel: "+9112800800",
  website: "www.example.com",
  company: {
    bs: "bs",
    catchPhrase: "Catch Phrase",
    name: "My Company",
  },
  address: {
    suite: "123",
    street: "Mango Avenue",
    city: "New York",
    zipcode: "1230001",
    geo: {
      lat: "27.0021",
      lng: "138.2902",
    },
  },
};

test("Text component renders the text based on prop input", async () => {
  render(<UserItem user={mockUser} />);

  expect(screen.getByText("User: 1")).toBeInTheDocument();
  expect(screen.getByText("User One")).toBeInTheDocument();
  expect(screen.getByText("userone@example.com")).toBeInTheDocument();
  expect(screen.getByText("+9112800800")).toBeInTheDocument();
  expect(screen.getByText("My Company")).toBeInTheDocument();
});
