import "./RecipeIngredients.css";
import { ingredient } from "../../../public/models/recipe.model";
import { useEffect, useState } from "react";

interface RecipeIngredientsProps {
  ingredientIds: number[];
}

function RecipeIngredients({ ingredientIds }: RecipeIngredientsProps) {
  const [ingredientsData, setIngredientsData] = useState<ingredient[]>([]);

  useEffect(() => {
    fetch("/data/ingredients.json")
      .then((response) => response.json())
      .then((data) => setIngredientsData(data));
  }, []);

  const ingredients = ingredientIds.map((id) => {
    const ingredient = ingredientsData.find(
      (ingredient) => ingredient.id === id
    );
    return ingredient ? ingredient.name : "Unknown Ingredient";
  });

  return (
    <>
      <div className="recipeIngredients-barrier"></div>
      <div className="recipeIngredients-title">Ingredients</div>
      <div className="recipeIngredients-list">
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="recipeIngredients-barrier"></div>
    </>
  );
}

export default RecipeIngredients;
