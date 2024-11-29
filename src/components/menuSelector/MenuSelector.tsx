import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomMenuButton from "../menuButton/MenuButton";
import "./menuSelector.css";

type MenuSelectorProp = {
  buttonSelected: number;
};

function MenuSelector(props: MenuSelectorProp) {
  const { buttonSelected } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(buttonSelected);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 410); // Detecta si la pantalla es menor a 410px
  const navigate = useNavigate();

  // Detectar el tamaño de la ventana y actualizar el estado
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 410);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigation = (path: string, buttonId: number) => {
    navigate(path);
    setSelectedButton(buttonId);
    setIsDropdownOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="menuSelector-title">Category</div>
      <div className="menuSelector-buttons">
        {!isMobile && (
          <>
            {/* Botones visibles solo en pantallas mayores a 410px */}
            <CustomMenuButton
              buttonName="Official"
              buttonStatus={selectedButton === 1 ? 1 : 0}
              onClick={() => handleNavigation("/Home", 1)}
            />
            <CustomMenuButton
              buttonName="My Recipes"
              buttonStatus={selectedButton === 2 ? 1 : 0}
              onClick={() => handleNavigation("/Home/MyRecipes", 2)}
            />
            <CustomMenuButton
              buttonName="Online"
              buttonStatus={selectedButton === 3 ? 1 : 0}
              onClick={() => handleNavigation("/Home/Online", 3)}
            />
          </>
        )}

        {/* Mostrar dropdown solo en pantallas menores a 410px */}
        {isMobile && (
          <div className="dropdown">
            <CustomMenuButton
              buttonName={
                selectedButton === 1
                  ? "Official"
                  : selectedButton === 2
                  ? "My Recipes"
                  : "Online"
              }
              buttonStatus={1}
              onClick={handleDropdownToggle}
            />
            {isDropdownOpen && (
              <div className="dropdown-content">
                <CustomMenuButton
                  buttonName="Official"
                  buttonStatus={selectedButton === 1 ? 1 : 0}
                  onClick={() => handleNavigation("/Home", 1)}
                />
                <CustomMenuButton
                  buttonName="My Recipes"
                  buttonStatus={selectedButton === 2 ? 1 : 0}
                  onClick={() => handleNavigation("/Home/MyRecipes", 2)}
                />
                <CustomMenuButton
                  buttonName="Online"
                  buttonStatus={selectedButton === 3 ? 1 : 0}
                  onClick={() => handleNavigation("/Home/Online", 3)}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuSelector;
