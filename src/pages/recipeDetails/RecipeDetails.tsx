import { MdOutlineTimer } from "react-icons/md";
import StaticStars from "../../components/stars/StaticStars";
import "./RecipeDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import RecipeIngredients from "../../components/recipeIngredients/RecipeIngredients";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data/recipes.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find(
          (recipe) => recipe.id === parseInt(id || "0")
        );
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error al cargar recetas:", error));
  }, [id]);

  const handleNavigation = () => {
    navigate(`/Home`);
  };

  if (!recipe) {
    return <div>Cargando receta...</div>;
  }

  return (
    <>
      <div className="recipe-details">
        <button
          className="recipe-details-back-button"
          onClick={handleNavigation}
        >
          <FaArrowLeft />
        </button>
        <div className="recipe-details-image-container">
          <img
            src={recipe.image || "/img/placeholder_image.jpg"}
            alt={`Imagen de ${recipe.title}`}
            className="recipe-details-recipe-image"
          />
        </div>
        <p className="recipe-details-recipe-title">{recipe.title}</p>
        <div className="recipe-details-rating-container">
          <StaticStars rating={recipe.difficulty} />{" "}
          <div>
            <MdOutlineTimer className="recipe-card-timer" />
            <span>{recipe.time}'</span>
          </div>
        </div>
        <RecipeIngredients />
        <div className="recipe-details-continue-button">
          <div className="recipe-details-continue-button-text">Let's Cook</div>
        </div>
      </div>
    </>
  );
}

export default RecipeDetails;
