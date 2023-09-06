import { render, screen } from "@testing-library/react";
import { Text } from "../text";

test("Text component renders the text based on prop input", async () => {
  render(<Text text="test" />);

  expect(screen.getByText("test")).toBeInTheDocument();
});
