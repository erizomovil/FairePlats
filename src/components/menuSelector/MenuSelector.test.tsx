import { render, screen, fireEvent, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MenuSelector from "./MenuSelector";
import "@testing-library/jest-dom";
import { vi } from "vitest";

vi.mock("../menuButton/MenuButton", () => ({
  __esModule: true,
  default: ({
    buttonName,
    buttonStatus,
    onClick,
  }: {
    buttonName: string;
    buttonStatus: number;
    onClick: () => void;
  }) => (
    <button
      data-testid={`menu-button-${buttonName.replace(/ /g, "-").toLowerCase()}`}
      data-status={buttonStatus}
      onClick={onClick}
    >
      {buttonName}
    </button>
  ),
}));

describe("MenuSelector", () => {
  const renderMenuSelector = (buttonSelected = 1) => {
    return render(
      <BrowserRouter>
        <MenuSelector buttonSelected={buttonSelected} />
      </BrowserRouter>
    );
  };

  beforeEach(() => {
    global.innerWidth = 1024;
    window.dispatchEvent(new Event("resize"));
  });

  it("should render correctly on desktop with all buttons", () => {
    renderMenuSelector();

    expect(screen.getByTestId("menu-button-official")).toBeInTheDocument();
    expect(screen.getByTestId("menu-button-my-recipes")).toBeInTheDocument();
    expect(screen.getByTestId("menu-button-online")).toBeInTheDocument();
  });

  it("should highlight the selected button based on props", () => {
    renderMenuSelector(2);

    expect(
      screen.getByTestId("menu-button-official").getAttribute("data-status")
    ).toBe("0");
    expect(
      screen.getByTestId("menu-button-my-recipes").getAttribute("data-status")
    ).toBe("1");
    expect(
      screen.getByTestId("menu-button-online").getAttribute("data-status")
    ).toBe("0");
  });

  it("should navigate and update selected button when a button is clicked", () => {
    const { getByTestId } = renderMenuSelector();

    fireEvent.click(getByTestId("menu-button-my-recipes"));

    expect(
      getByTestId("menu-button-official").getAttribute("data-status")
    ).toBe("0");
    expect(
      getByTestId("menu-button-my-recipes").getAttribute("data-status")
    ).toBe("1");
    expect(getByTestId("menu-button-online").getAttribute("data-status")).toBe(
      "0"
    );
  });

  it("should display dropdown menu on mobile", () => {
    global.innerWidth = 400;
    window.dispatchEvent(new Event("resize"));

    renderMenuSelector();

    const dropdownButton = screen.getByTestId("menu-button-official");
    expect(dropdownButton).toBeInTheDocument();

    fireEvent.click(dropdownButton);

    expect(screen.getAllByTestId("menu-button-official").length).toBe(2);
    expect(screen.getByTestId("menu-button-my-recipes")).toBeInTheDocument();
    expect(screen.getByTestId("menu-button-online")).toBeInTheDocument();
  });

  it("should toggle the dropdown menu when clicked on mobile", () => {
    global.innerWidth = 400;
    window.dispatchEvent(new Event("resize"));

    renderMenuSelector();

    const dropdownButton = screen.getByTestId("menu-button-official");
    fireEvent.click(dropdownButton);

    expect(screen.getByTestId("menu-button-my-recipes")).toBeInTheDocument();

    fireEvent.click(dropdownButton);

    expect(
      screen.queryByTestId("menu-button-my-recipes")
    ).not.toBeInTheDocument();
  });

  it("should update layout on window resize", () => {
    const { getByTestId } = renderMenuSelector();

    expect(getByTestId("menu-button-official")).toBeInTheDocument();
    expect(getByTestId("menu-button-my-recipes")).toBeInTheDocument();
    expect(getByTestId("menu-button-online")).toBeInTheDocument();

    act(() => {
      global.innerWidth = 200;
      window.dispatchEvent(new Event("resize"));
    });
    expect(screen.getByTestId("menu-button-official")).toBeInTheDocument();
    /*
    expect(
      screen.getByTestId("menu-button-my-recipes")
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("menu-button-online")).not.toBeInTheDocument();
    console.log(screen.debug());*/
  });
});
