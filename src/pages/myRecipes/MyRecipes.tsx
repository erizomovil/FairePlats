import MenuSelector from "../../components/menuSelector/MenuSelector";
import Navbar from "../../components/navbar/Navbar";
import RecipesLists from "../../components/recipesList/RecipesList";
import "./MyRecipes.css";

function MyRecipes() {
  return (
    <>
      <div className="body">
        <Navbar />
        <MenuSelector buttonSelected={2} />
        <RecipesLists />
      </div>
    </>
  );
}
export default MyRecipes;
