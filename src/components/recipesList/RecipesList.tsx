import Card from "../card/Card";
import "./RecipesList.css";

function RecipesLists() {
  return (
    <>
      <div className="recipes-list">
        <Card title={"Fried Egg"} dificulty={1} time={5} />
        <Card title={"White Rice"} dificulty={2} time={15} />
        <Card title={"Omelete"} dificulty={2} time={12} />
        <Card title={"Hamburger"} dificulty={2} time={10} />
        <Card title={"Spagetty a la boloñesa"} dificulty={2} time={15} />
      </div>
    </>
  );
}
export default RecipesLists;
