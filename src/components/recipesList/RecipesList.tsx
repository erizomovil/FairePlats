import { useEffect, useState } from "react";
import Card from "../card/Card";
import "./RecipesList.css";
import { Recipe } from "../../../public/models/recipe.model";
//import { RecipeService } from "../../services/recipe.service";

interface RecipesListsProps {
  searchTerm: string;
}

function RecipesLists({ searchTerm }: RecipesListsProps) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    fetch("/data/recipes.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error al cargar recetas:", error));
  }, []);

  // For BackEnd
  /* 
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await RecipeService.getRecipes();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);*/

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="recipes-list">
        {filteredRecipes.map((recipe, index) => (
          <Card
            key={index}
            id={recipe.id}
            title={recipe.title}
            dificulty={recipe.difficulty}
            time={recipe.time}
            image={recipe.image}
          />
        ))}
      </div>
    </>
  );
}
export default RecipesLists;
