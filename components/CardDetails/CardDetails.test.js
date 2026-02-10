import CardDetails from "./CardDetails";
import { render, screen } from "@testing-library/react";

test("should render image", () => {
  render(
    <CardDetails
      artPiece={{
        imageSource: "/test.png",
        name: "Mona Lisa",
        artist: "Leonardo da Vinci",
        year: "1503",
        genre: "genre",
      }}
    />
  );
  const img = screen.getByAltText("Mona Lisa");
  expect(img).toBeInTheDocument();
});

test("should render heading", () => {
  render(
    <CardDetails
      artPiece={{
        imageSource: "/test.png",
        name: "Mona Lisa",
        artist: "Leonardo da Vinci",
        year: "1503",
        genre: "genre",
      }}
    />
  );
  const heading = screen.getByRole("heading", {
    name: "Mona Lisa",
  });
  expect(heading).toBeInTheDocument();
});

test("should render artist", () => {
  render(
    <CardDetails
      artPiece={{
        imageSource: "/test.png",
        name: "Mona Lisa",
        artist: "Leonardo da Vinci",
        year: "1503",
        genre: "genre",
      }}
    />
  );
  const artist = screen.getByText("Artist: Leonardo da Vinci");
  expect(artist).toBeInTheDocument();
});

test("should render year", () => {
  render(
    <CardDetails
      artPiece={{
        imageSource: "/test.png",
        name: "Mona Lisa",
        artist: "Leonardo da Vinci",
        year: "1503",
        genre: "genre",
      }}
    />
  );
  const year = screen.getByText("Year: 1503");
  expect(year).toBeInTheDocument();
});

test("should render genre", () => {
  render(
    <CardDetails
      artPiece={{
        imageSource: "/test.png",
        name: "Mona Lisa",
        artist: "Leonardo da Vinci",
        year: "1503",
        genre: "genre",
      }}
    />
  );
  const genre = screen.getByText("Genre: genre");
  expect(genre).toBeInTheDocument();
});

test("should render link", () => {
  render(
    <CardDetails
      artPiece={{
        imageSource: "/test.png",
        name: "Mona Lisa",
        artist: "Leonardo da Vinci",
        year: "1503",
        genre: "genre",
      }}
    />
  );
  const link = screen.getByText("back to gallery");
  expect(link).toBeInTheDocument();
});
