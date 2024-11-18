import "./RecipeIngredients.css";

function RecipeIngredients() {
  const ingredients = [
    "Leche",
    "Harina",
    "Azucar",
    "sal",
    "maicena",
    "mantequilla",
    "manzana",
    "pimienta",
  ];
  return (
    <>
      <div className="recipeIngredients-barrier"></div>
      <div className="recipeIngredients-title">Ingredients</div>
      <div className="recipeIngredients-list">
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="recipeIngredients-barrier"></div>
    </>
  );
}
export default RecipeIngredients;