import "./CreateIngredients.css";

function CreateIngredients() {
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
      <div className="createIngredients-barrier"></div>
      <div className="createIngredients-title">Ingredients</div>
      <div className="createIngredients-list">
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="createIngredients-barrier"></div>
    </>
  );
}
export default CreateIngredients;
