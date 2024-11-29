import { useEffect, useState } from "react";
import "./AddIngredients.css";
import { IngredientData } from "../../../public/models/recipe.model";

interface AddIngredientsProps {
  onIngredientsChange: (ingredientIds: number[]) => void;
}

const AddIngredients = ({ onIngredientsChange }: AddIngredientsProps) => {
  const [selectedIngredients, setSelectedIngredients] = useState<
    IngredientData[]
  >([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ingredients, setIngredients] = useState<IngredientData[]>([]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    fetch("/data/ingredients.json")
      .then((response) => response.json())
      .then((data) => setIngredients(data))
      .catch((error) => console.error("Error al cargar ingredientes:", error));
  }, []);

  const addStep = (ingredient: IngredientData) => {
    const updatedIngredients = [...selectedIngredients, ingredient];
    setSelectedIngredients(updatedIngredients);
    const ingredientIds = updatedIngredients.map((ing) => ing.id);
    onIngredientsChange(ingredientIds);

    toggleModal();
  };

  return (
    <>
      <div className="addingredient">
        <div>
          <ul>
            {selectedIngredients.map((ingredient) => (
              <li key={ingredient.id} className="addIngredient-list-name">
                {ingredient.name}
              </li>
            ))}
          </ul>
          <button className="add-ingredient-icon" onClick={toggleModal}>
            +
          </button>
        </div>
      </div>
      {isModalVisible && (
        <div className="popupStyle">
          <div className="popupContentStyle">
            <h3>Select an Ingredient</h3>
            <ul>
              {ingredients.map((ingredient) => (
                <li
                  key={ingredient.id}
                  className="listItemStyle"
                  onClick={() => addStep(ingredient)}
                >
                  {ingredient.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default AddIngredients;
