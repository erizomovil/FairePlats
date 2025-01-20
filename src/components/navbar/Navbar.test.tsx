import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import RecipesLists from "../recipesList/RecipesList";
import { useState } from "react";
import "@testing-library/jest-dom";

const Wrapper = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <div>
      <Navbar onSearchChange={handleSearchChange} />
      <RecipesLists searchTerm={searchTerm} />
    </div>
  );
};

describe("Funcion Navbar", () => {
  it("should update the search term and filter recipes list", async () => {
    render(<Wrapper />);

    const allCards = screen.queryAllByTestId("recipe-card");
    expect(allCards).toHaveLength(0);
    const input = screen.getByPlaceholderText(/search/i);
    fireEvent.change(input, { target: { value: "Ome" } });
    expect(input).toHaveValue("Ome");
    const filteredCards = screen.queryAllByTestId("recipe-card");
    expect(filteredCards.length).toBeGreaterThan(0);
  });
});
