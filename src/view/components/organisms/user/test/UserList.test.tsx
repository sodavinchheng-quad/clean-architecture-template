import { render, screen } from "@testing-library/react";
import { User } from "../../../../../domain/model";
import { UserList } from "../UserList";

const mockUsers: User[] = [
  {
    id: 1,
    name: "User One",
    username: "username1",
    email: "userone@example.com",
    tel: "+9112800800",
    website: "www.example.com",
    company: {
      bs: "bs",
      catchPhrase: "Catch Phrase",
      name: "My Company 1",
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
  },
  {
    id: 2,
    name: "User Two",
    username: "username2",
    email: "usertwo@example.com",
    tel: "+9112800801",
    website: "www.example.com",
    company: {
      bs: "bs",
      catchPhrase: "Catch Phrase",
      name: "My Company 2",
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
  },
];

test("Text component renders the text based on prop input", async () => {
  render(<UserList users={mockUsers} />);

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
