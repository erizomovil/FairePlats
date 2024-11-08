import MenuSelector from "../../components/menuSelector/MenuSelector";
import Navbar from "../../components/navbar/Navbar";
import RecipesLists from "../../components/recipesList/RecipesList";
import "./MyRecipes.css";

function MyRecipes() {
  return (
    <>
      <Navbar />
      <MenuSelector />
      <RecipesLists />
    </>
  );
}
export default MyRecipes;
