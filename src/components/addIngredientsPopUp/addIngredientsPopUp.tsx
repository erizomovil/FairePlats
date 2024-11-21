// AddIngredientsPopUp.tsx
import React, { useState } from "react";
import "./AddIngredientsPopUp.css";

interface AddIngredientsPopUpProps {
  addIngredient: (ingredient: string) => void;
}

const AddIngredientsPopUp: React.FC<AddIngredientsPopUpProps> = ({
  addIngredient,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [listItems] = useState(["Leche", "Cacao", "Mantequilla", "Azucar"]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setInputValue("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleListItemClick = (item: string) => {
    setSelectedItem(item);
    addIngredient(item);
    closePopup();
  };

  return (
    <div>
      <button onClick={openPopup} className="add-ingredient-icon">
        +
      </button>

      {isPopupOpen && (
        <div className="popupStyle">
          <div className="popupContentStyle">
            <h2>Select Ingredient</h2>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type ingredient"
            />
            <ul>
              {listItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleListItemClick(item)}
                  className="listItemStyle"
                >
                  {item}
                </li>
              ))}
            </ul>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddIngredientsPopUp;
