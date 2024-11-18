import { MdOutlineTimer } from "react-icons/md";
import React, { useState } from "react";
import "./CreateRecipe.css";
import { FaArrowLeft } from "react-icons/fa";
import RatingStars from "../../components/stars/RatingStars";
import TimeSelector from "../../components/timeSelector/TimeSelector";
import CreateIngredients from "../../components/createIngredients/CreateIngredients";

function CreateRecipe() {
  const [title, settitle] = useState<string>("");

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    settitle(e.target.value);
  };

  const manejarBotonClick = () => {
    console.log("title del input:", title);
  };

  return (
    <>
      <div className="recipe-create">
        <button className="recipe-create-back-button">
          <FaArrowLeft />
        </button>
        <div className="recipe-create-image-container">
          <img
            src="/img/fried_egg.jpg"
            alt="Imagen de la receta"
            className="recipe-create-recipe-image"
          />
        </div>
        <input
          id="campoTexto"
          type="text"
          value={title}
          onChange={manejarCambio}
        />
        <div className="recipe-create-rating-container">
          <RatingStars />
          <div>
            <MdOutlineTimer className="recipe-card-timer" />
            <TimeSelector />
          </div>
        </div>
        <CreateIngredients />
        <div
          className="recipe-create-continue-button"
          onClick={manejarBotonClick}
        >
          <div className="recipe-create-continue-button-text">Continue</div>
        </div>
      </div>
    </>
  );
}

export default CreateRecipe;
