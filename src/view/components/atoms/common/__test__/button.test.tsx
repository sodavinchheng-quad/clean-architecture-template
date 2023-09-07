import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "../button";

test("Button component renders the text based on prop input", async () => {
  const onClick = jest.fn();

  render(<Button text="test" onClick={onClick} />);

  const btn = screen.getByText("test");
  expect(btn).toBeInTheDocument();

  fireEvent.click(btn);
  expect(onClick).toBeCalled();
});
