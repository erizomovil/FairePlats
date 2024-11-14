import { MdOutlineTimer } from "react-icons/md";
import StaticStars from "../../components/stars/StaticStars";
import "./RecipeDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import RecipeIngredients from "../../components/recipeIngredients/RecipeIngredients";

function RecipeDetails() {
  return (
    <>
      <div className="recipe-details">
        <button className="recipe-details-back-button">
          <FaArrowLeft />
        </button>
        <div className="recipe-details-image-container">
          <img
            src="/img/fried_egg.jpg"
            alt="Imagen de la receta"
            className="recipe-details-recipe-image"
          />
        </div>
        <p className="recipe-details-recipe-title">Fried Egg</p>
        <div className="recipe-details-rating-container">
          <StaticStars rating={1} />
          <div>
            <MdOutlineTimer className="recipe-card-timer" />
            <span>5'</span>
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
