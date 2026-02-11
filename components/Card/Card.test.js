import { render, screen } from "@testing-library/react";
import Card from "./Card";

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }) => (
    <img data-testid="card-image" alt={alt} src={src} {...props} />
  ),
}));

describe('Card Component', () => {
  const baseProps = {
    artist: "Elianne Dipp",
    imageName: "Split Shot of Whale",
    imageSource: "/test.png",
    imageYear: "2016",
    imageGenre: "Nature",
    slug: "test-slug",
  };

  test("renders artist name", () => {
    render(<Card {...baseProps} />);
    expect(screen.getByText("Elianne Dipp")).toBeInTheDocument();
  });

  test("renders image name as link", () => {
    render(<Card {...baseProps} />);
    expect(screen.getByText("Split Shot of Whale")).toBeInTheDocument();
  });

  test("renders image with correct alt text", () => {
    render(<Card {...baseProps} />);
    expect(screen.getByAltText("Split Shot of Whale")).toBeInTheDocument();
  });

  test("renders year and genre on details view", () => {
    render(<Card {...baseProps} isDetails={true} />);
    expect(screen.getByText("2016")).toBeInTheDocument();
    expect(screen.getByText("Nature")).toBeInTheDocument();
  });

  test("hides year and genre on gallery view", () => {
    render(<Card {...baseProps} isDetails={false} />);
    expect(screen.queryByText("2016")).not.toBeInTheDocument();
    expect(screen.queryByText("Nature")).not.toBeInTheDocument();
  });
});
