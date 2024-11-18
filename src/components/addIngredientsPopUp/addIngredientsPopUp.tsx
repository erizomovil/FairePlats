import React, { useState } from "react";

const AddIngredientsPopUp: React.FC = () => {
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
    closePopup();
  };

  return (
    <div>
      <button onClick={openPopup}>Open Popup</button>
      {isPopupOpen && (
        <div className="popupStyle">
          <div className="popupContentStyle">
            <h2>Popup</h2>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type something"
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
            {selectedItem && <p>Selected: {selectedItem}</p>}
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddIngredientsPopUp;
