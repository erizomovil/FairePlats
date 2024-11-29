// src/context/RecipeContext.tsx
import React, { createContext, useContext, useState } from "react";
import { Recipe } from "../../public/models/recipe.model";

interface RecipeContextProps {
  recipe: Recipe;
  setRecipe: (recipe: Recipe) => void;
}

const initialRecipe: Recipe = {
  id: 0,
  title: "",
  difficulty: 0,
  time: 0,
  image: "/img/placeholder_image.jpg",
  ingredients: [],
  steps: [],
};

const RecipeContext = createContext<RecipeContextProps | undefined>(undefined);

export const RecipeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [recipe, setRecipe] = useState<Recipe>(initialRecipe);

  return (
    <RecipeContext.Provider value={{ recipe, setRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipeContext debe ser usado dentro de RecipeProvider");
  }
  return context;
};
