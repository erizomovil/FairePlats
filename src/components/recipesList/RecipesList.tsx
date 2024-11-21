import { useEffect, useState } from "react";
import Card from "../card/Card";
import "./RecipesList.css";

type Recipe = {
  id: number;
  title: string;
  difficulty: number;
  time: number;
  image: string;
};

function RecipesLists() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("/data/recipes.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error al cargar recetas:", error));
  }, []);

  return (
    <>
      <div className="recipes-list">
        {recipes.map((recipe, index) => (
          <Card
            key={index}
            id={recipe.id}
            title={recipe.title}
            dificulty={recipe.difficulty}
            time={recipe.time}
          />
        ))}
      </div>
    </>
  );
}
export default RecipesLists;
