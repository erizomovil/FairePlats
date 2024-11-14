import StaticStars from "../../components/stars/StaticStars";
import "./RecipeDetails.css"
import { FaArrowLeft, FaStar } from "react-icons/fa";

function RecipeDetails() {
    return (
        <>
            <div className="recipe-details">
                <button className="back-button">
                    <FaArrowLeft />
                </button>
                <div className="image-container">
                    <img 
                        src="" 
                        alt="Imagen de la receta" 
                        className="recipe-image" 
                    />
                </div>
                <p className="recipe-title">Fried Egg</p>
                <div className="rating-container">
                    <StaticStars rating={1} />
                </div>
            </div>
        </>
    );
}

export default RecipeDetails;