import MenuSelector from "../../components/menuSelector/MenuSelector";
import Navbar from "../../components/navbar/Navbar";
import RecipesLists from "../../components/recipesList/RecipesList";
import "./Online.css";

function Online() {
  return (
    <>
      <div className="body">
        <Navbar />
        <MenuSelector buttonSelected={3} />
        <RecipesLists />
      </div>
    </>
  );
}
export default Online;
