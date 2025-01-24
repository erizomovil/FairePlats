import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes, useNavigate } from "react-router-dom";
import RotatePhone from "./RotatePhone";
import { vi } from "vitest";
import "@testing-library/jest-dom";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe("RotatePhone Component", () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);
    vi.clearAllMocks();
  });

  const renderWithRouter = (ui: JSX.Element, { route = "/" } = {}) => {
    window.history.pushState({}, "Test Page", route);
    return render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/:id" element={ui} />
        </Routes>
      </MemoryRouter>
    );
  };

  test("renders the component correctly", () => {
    renderWithRouter(<RotatePhone />, { route: "/3" });
    expect(screen.getByAltText("Rotate phone")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("navigates to /Home when back button is clicked", () => {
    renderWithRouter(<RotatePhone />, { route: "/3" });
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith("/Home");
  });

  test("navigates to /RecipeStep/:id on resize if width > height", () => {
    global.innerWidth = 800;
    global.innerHeight = 600;
    renderWithRouter(<RotatePhone />, { route: "/3" });
    fireEvent(window, new Event("resize"));
    expect(mockNavigate).toHaveBeenCalledWith("/RecipeStep/3");
  });

  test("does not navigate on resize if height > width", () => {
    global.innerWidth = 600;
    global.innerHeight = 800;
    renderWithRouter(<RotatePhone />, { route: "/3" });
    fireEvent(window, new Event("resize"));
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
