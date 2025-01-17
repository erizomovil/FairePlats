import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Funcion Navbar", () => {
  it("Navbar renders", () => {
    render(
      <Navbar
        onSearchChange={function (searchTerm: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
  });
});
