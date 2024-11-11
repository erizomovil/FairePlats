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
        <Card title={"Saltburry Steak"} dificulty={3} time={60} />
        <Card title={"Rattatui"} dificulty={4} time={90} />
        <Card title={"Lasagna titu mama"} dificulty={5} time={120} />
      </div>
    </>
  );
}
export default RecipesLists;
