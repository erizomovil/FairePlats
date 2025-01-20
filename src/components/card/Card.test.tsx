import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";
import "@testing-library/jest-dom";
import { MemoryRouter, useNavigate } from "react-router-dom";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

beforeEach(() => {
  vi.resetAllMocks();
});

describe("Card component", () => {
  const mockProps = {
    id: 1,
    title: "Test Recipe",
    dificulty: 3,
    time: 45,
    image: "valid-image-url.jpg",
  };

  it("everything renders", async () => {
    render(
      <MemoryRouter>
        <Card {...mockProps} />
      </MemoryRouter>
    );

    expect(screen.getByText("Test Recipe")).toBeInTheDocument();

    const stars = await screen.findByTestId("static-stars");
    expect(stars).toBeInTheDocument();

    expect(screen.getByText("45'")).toBeInTheDocument();

    const images = screen.queryAllByRole("img");
    const img = images.find(
      (image) => (image as HTMLImageElement).alt === "Fried Egg"
    ) as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "valid-image-url.jpg");
  });

  it("uses the placeholder image if the provided image fails to load", () => {
    render(
      <MemoryRouter>
        <Card {...mockProps} />
      </MemoryRouter>
    );

    const images = screen.queryAllByRole("img");
    const img = images.find(
      (image) => (image as HTMLImageElement).alt === "Fried Egg"
    ) as HTMLImageElement;
    fireEvent.error(img);
    expect(img).toHaveAttribute("src", "/img/placeholder_image.jpg");
  });

  it("navigates to the correct route on click", async () => {
    const navigateMock = vi.fn();
    useNavigate.mockReturnValue(navigateMock);

    render(
      <MemoryRouter>
        <Card {...mockProps} />
      </MemoryRouter>
    );
    const card = screen.findByTestId("recipe-card");
    fireEvent.click(await card);
    expect(navigateMock).toHaveBeenCalledWith("/RecipeDetails/1");
    expect(navigateMock).toHaveBeenCalledTimes(1);
  });
});
