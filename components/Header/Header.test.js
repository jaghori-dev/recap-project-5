import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("should render heading", () => {
  render(<Header />);
  const h1 = screen.getByRole("heading", {
    name: "Art Gallery",
  });
  expect(h1).toBeInTheDocument();
});

test("should render spotlight link", () => {
  render(<Header />);
  const link = screen.getByText("Spotlight");
  expect(link).toBeInTheDocument();
});

test("should render gallery link", () => {
  render(<Header />);
  const link = screen.getByText("Gallery");
  expect(link).toBeInTheDocument();
});
