import "./MenuButton.css";

type MenuBotonProp = {
  buttonName: string;
  buttonStatus: number;
  onClick: () => void;
};

function CustomMenuButton(props: MenuBotonProp) {
  const { buttonName, buttonStatus, onClick } = props;

  const buttonClass = buttonStatus === 1 ? "active" : "inactive";
  return (
    <div className={`Custom-menu-button ${buttonClass}`} onClick={onClick}>
      <div>{buttonName}</div>
    </div>
  );
}
export default CustomMenuButton;
