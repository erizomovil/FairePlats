import "./MenuButton.css";

type MenuBotonProp = {
  buttonName: string;
  buttonStatus: number;
};

function CustomMenuButton(props: MenuBotonProp) {
  const { buttonName, buttonStatus } = props;

  const buttonClass = buttonStatus === 1 ? "active" : "inactive";
  return (
    <div className={`Custom-menu-button ${buttonClass}`}>
      <div>{buttonName}</div>
    </div>
  );
}
export default CustomMenuButton;
