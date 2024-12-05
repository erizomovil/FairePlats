import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useRecipeContext } from "../../contexts/RecipeContext";
import "./CreateRecipeSteps.css";
import AddSteps from "../../components/addSteps/AddSteps";
import { useState } from "react";
import recipesData from "../../../public/data/recipes.json";

let recipes = recipesData;

function CreateRecipeSteps() {
  const navigate = useNavigate();
  const { recipe, setRecipe } = useRecipeContext();
  const [recipesList, setRecipesList] = useState(recipes);

  // Verifica si los pasos están completos
  const isFormValid = () => {
    return recipe.steps.length > 0; // Verifica si hay pasos añadidos
  };

  const handleNavigationHome = () => {
    navigate(`/CreateRecipe`);
  };

  const handleStepsChange = (stepIds: number[]) => {
    setRecipe({ ...recipe, steps: stepIds });
  };

  const manejarBotonClick = () => {
    if (isFormValid()) {
      const newRecipe = {
        ...recipe,
        id: recipesList.length + 1,
      };
      const updatedRecipes = [...recipesList, newRecipe];
      setRecipesList(updatedRecipes);

      console.log("Receta agregada:", newRecipe);

      navigate(`/Home/MyRecipes`);
    }
  };

  return (
    <div className="createRecipeSteps">
      <button
        className="createRecipeSteps-back-button"
        onClick={handleNavigationHome}
      >
        <FaArrowLeft />
      </button>
      <div className="createRecipeSteps-title">Steps</div>
      <div className="createRecipeSteps-barrier"></div>
      <div className="createRecipeSteps-list">
        <AddSteps onStepsChange={handleStepsChange} />
      </div>
      <div className="createRecipeSteps-barrier"></div>
      <div
        className={`createRecipeSteps-continue-button ${
          !isFormValid() ? "disabled" : ""
        }`}
        onClick={manejarBotonClick}
      >
        <div className="createRecipeSteps-continue-button-text">Continue</div>
      </div>
    </div>
  );
}

export default CreateRecipeSteps;
