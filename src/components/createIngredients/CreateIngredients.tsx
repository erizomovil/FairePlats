import React, { useState } from "react";
import "./CreateIngredients.css";
import AddIngredientsPopUp from "../addIngredientsPopUp/addIngredientsPopUp";

function CreateIngredients() {
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = (ingredient: string) => {
    setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
  };

  return (
    <>
      <div className="createIngredients-barrier"></div>
      <div className="createIngredients-title">Ingredients</div>
      <div className="createIngredients-list">
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="createIngredients-add-ingredient-btn">
        <AddIngredientsPopUp addIngredient={addIngredient} />
      </div>
      <div className="createIngredients-barrier"></div>
    </>
  );
}
export default CreateIngredients;
