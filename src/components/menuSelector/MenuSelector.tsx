import { useNavigate } from "react-router-dom";
import CustomMenuButton from "../menuButton/MenuButton";
import "./menuSelector.css";

type MenuSelectorProp = {
  buttonSelected: number;
};

function MenuSelector(props: MenuSelectorProp) {
  const { buttonSelected } = props;
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div>
      <div className="menuSelector-title">Category</div>
      <div className="menuSelector-buttons">
        <CustomMenuButton
          buttonName={"Official"}
          buttonStatus={buttonSelected === 1 ? 1 : 0}
          onClick={() => handleNavigation("/Home")}
        />
        <CustomMenuButton
          buttonName={"My Recipes"}
          buttonStatus={buttonSelected === 2 ? 1 : 0}
          onClick={() => handleNavigation("/Home/MyRecipes")}
        />
        <CustomMenuButton
          buttonName={"Online"}
          buttonStatus={buttonSelected === 3 ? 1 : 0}
          onClick={() => handleNavigation("/Home/Online")}
        />
      </div>
    </div>
  );
}
export default MenuSelector;
