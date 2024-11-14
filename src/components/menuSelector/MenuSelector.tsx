import CustomMenuButton from "../menuButton/MenuButton";
import "./menuSelector.css";

type MenuSelectorProp = {
  buttonSelected: number;
};

function MenuSelector(props: MenuSelectorProp) {
  const { buttonSelected } = props;
  return (
    <div>
      <div className="menuSelector-title">Category</div>
      <div className="menuSelector-buttons">
        <CustomMenuButton
          buttonName={"Official"}
          buttonStatus={buttonSelected === 1 ? 1 : 0}
        />
        <CustomMenuButton
          buttonName={"My Recipes"}
          buttonStatus={buttonSelected === 2 ? 1 : 0}
        />
        <CustomMenuButton
          buttonName={"Online"}
          buttonStatus={buttonSelected === 3 ? 1 : 0}
        />
      </div>
    </div>
  );
}
export default MenuSelector;
