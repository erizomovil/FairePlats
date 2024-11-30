import { MdOutlineTimer } from "react-icons/md";
import StaticStars from "../../components/stars/StaticStars";
import "./RecipeDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import RecipeIngredients from "../../components/recipeIngredients/RecipeIngredients";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Recipe } from "../../../public/models/recipe.model";


function RecipeDetails() {
  const { id } = useParams();
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe>();
  const [imageError, setImageError] = useState(false);  // Estado para controlar si hay un error en la imagen

  const updateOrientation = () => {
    setIsPortrait(window.innerHeight > window.innerWidth);
  };

  useEffect(() => {
    fetch("/data/recipes.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find(
          (recipe: Recipe) => recipe.id === parseInt(id || "0")
        );
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error al cargar recetas:", error));

    window.addEventListener("resize", updateOrientation);
    return () => {
      window.removeEventListener("resize", updateOrientation);
    };
  }, [id]);

  const handleNavigationHome = () => {
    navigate(`/Home`);
  };

  const isButtonDisabled = !recipe?.steps || recipe.steps.length === 0;

  const handleNavigationNext = () => {
    if (!isButtonDisabled) {
      if (!isPortrait) {
        navigate(`/RecipeStep/${id}`);
      } else {
        navigate(`/RotatePhone/${id}`);
      }
    }
  };

  const handleImageError = () => {
    setImageError(true); // Marca que ha ocurrido un error en la carga de la imagen
  };

  if (!recipe) {
    return <div>Cargando receta...</div>;
  }

  return (
    <>
      <div className="recipe-details">
        <button
          className="recipe-details-back-button"
          onClick={handleNavigationHome}
        >
          <FaArrowLeft />
        </button>
        <div className="recipe-details-image-container">
          <img
            src={imageError ? "/img/placeholder_image.jpg" : recipe.image}
            alt={`Imagen de ${recipe.title}`}
            className="recipe-details-recipe-image"
            onError={handleImageError} // Maneja el error de carga de la imagen
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
        <RecipeIngredients ingredientIds={recipe.ingredients} />
        <div
          className={`recipe-details-continue-button ${
            isButtonDisabled ? "disabled" : ""
          }`}
          onClick={!isButtonDisabled ? handleNavigationNext : undefined}
        >
          <div className="recipe-details-continue-button-text">Let's Cook</div>
        </div>
      </div>
    </>
  );
}

export default RecipeDetails;
