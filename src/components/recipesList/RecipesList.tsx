import Card from "../card/Card";
import "./RecipesList.css";

function RecipesLists() {
  return (
    <>
      <div className="recipes-list">
        <Card title={"Fried Egg"} />
        <Card title={"White Rice"} />
        <Card title={"Omelete"} />
        <Card title={"Hamburger"} />
        <Card title={"Spagetty a la boloñesa"} />
      </div>
    </>
  );
}
export default RecipesLists;
