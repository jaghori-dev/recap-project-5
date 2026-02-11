import Card from "./Card";
import { render, screen } from "@testing-library/react";

test("should render heading", () => {
  render(
    <Card
      title="Mona Lisa"
      description="Description"
      imageSource="/test.png"
      slug="Slug"
    />
  );
  const heading = screen.getByRole("heading", {
    name: "Description",
  });
  expect(heading).toBeInTheDocument();
});

test("should render title", () => {
  render(
    <Card
      title="Mona Lisa"
      description="Description"
      imageSource="/test.png"
      slug="Slug"
    />
  );
  const p = screen.getByText("Artist: Mona Lisa");
  expect(p).toBeInTheDocument();
});

test("should render image", () => {
  render(
    <Card
      title="Mona Lisa"
      description="Description"
      imageSource="/test.png"
      slug="Slug"
    />
  );
  const img = screen.getByAltText("Mona Lisa");
  expect(img).toBeInTheDocument();
});
