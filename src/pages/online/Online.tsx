import MenuSelector from "../../components/menuSelector/MenuSelector";
import Navbar from "../../components/navbar/Navbar";
import RecipesLists from "../../components/recipesList/RecipesList";
import "./Online.css";

function Online() {
  return (
    <>
      <Navbar />
      <MenuSelector />
      <RecipesLists />
    </>
  );
}
export default Online;
