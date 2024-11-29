import React from "react";
import "./CreateRecipe.css";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import RatingStars from "../../components/stars/RatingStars";
import TimeSelector from "../../components/timeSelector/TimeSelector";
import AddIngredients from "../../components/addIngredients/AddIngredients";
import { useNavigate } from "react-router-dom";
import { useRecipeContext } from "../../contexts/RecipeContext";

function CreateRecipe() {
  const { recipe, setRecipe } = useRecipeContext();
  const navigate = useNavigate();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipe({ ...recipe, title: e.target.value });
  };

  const handleDifficultyChange = (value: number) => {
    setRecipe({ ...recipe, difficulty: value });
  };

  const handleTimeChange = (value: number) => {
    setRecipe({ ...recipe, time: value });
  };

  const handleIngredientsChange = (ingredients: Array<number>) => {
    setRecipe({ ...recipe, ingredients });
  };

  const handleNavigation = () => {
    navigate(`/createRecipeSteps`);
  };

  return (
    <div className="recipe-create">
      <button
        className="recipe-create-back-button"
        onClick={() => navigate("/Home/MyRecipes")}
      >
        <FaArrowLeft />
      </button>
      <div className="recipe-create-image-container">
        <img
          src="/img/placeholder_image.jpg"
          alt="Imagen de la receta"
          className="recipe-create-recipe-image"
        />
      </div>
      <input
        id="campoTexto"
        type="text"
        placeholder="Recipe Title"
        value={recipe.title}
        onChange={handleTitleChange}
      />
      <div className="recipe-create-rating-container">
        <RatingStars onChange={handleDifficultyChange} />
        <div>
          <MdOutlineTimer className="recipe-card-timer" />
          <TimeSelector onChange={handleTimeChange} />
        </div>
      </div>
      <div className="recipe-create-add-ingredients-barrier" />
      <div className="recipe-create-add-ingredients-title">Ingredients</div>
      <div className="recipe-create-ingredients-list">
        <AddIngredients onIngredientsChange={handleIngredientsChange} />
      </div>
      <div className="recipe-create-add-ingredients-barrier" />
      <div className="recipe-create-continue-button" onClick={handleNavigation}>
        <div className="recipe-create-continue-button-text">Continue</div>
      </div>
    </div>
  );
}

export default CreateRecipe;
