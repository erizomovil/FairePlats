import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import RecipesLists from "../recipesList/RecipesList";
import { useState } from "react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 1,
          title: "Omelette",
          difficulty: 2,
          time: 10,
          image: "omelette.jpg",
        },
        {
          id: 2,
          title: "Pancakes",
          difficulty: 1,
          time: 15,
          image: "pancakes.jpg",
        },
      ]),
  })
) as unknown as jest.Mock;

const Wrapper = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  };
  return (
    <div>
      <MemoryRouter>
        <Navbar onSearchChange={handleSearchChange} />
        <RecipesLists searchTerm={searchTerm} />
      </MemoryRouter>
    </div>
  );
};

describe("Funcion Navbar", () => {
  it("should update the search term and filter recipes list", async () => {
    render(<Wrapper />);
    expect(global.fetch).toHaveBeenCalledWith("/data/recipes.json");
    const allCards = await screen.findAllByTestId("recipe-card");
    expect(allCards).toHaveLength(2);
    const input = screen.getByPlaceholderText(/search/i);
    fireEvent.change(input, { target: { value: "Ome" } });
    expect(input).toHaveValue("Ome");
    const filteredCards = screen.queryAllByTestId("recipe-card");
    expect(filteredCards.length).toBeGreaterThan(0);
  });
});
