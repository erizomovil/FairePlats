import CustomMenuButton from "../menuButton/MenuButton";
import "./menuSelector.css";

function MenuSelector() {
  return (
    <div className="menuSelector-buttons">
      <CustomMenuButton buttonName={"Official"} buttonStatus={1} />
      <CustomMenuButton buttonName={"My Recipes"} buttonStatus={0} />
      <CustomMenuButton buttonName={"Online"} buttonStatus={0} />
    </div>
  );
}
export default MenuSelector;
