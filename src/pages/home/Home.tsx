import Navbar from "../../components/navbar/Navbar";
import RecipesLists from "../../components/recipesList/RecipesList";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="body">
        <Navbar />
        <RecipesLists />
      </div>
    </>
  );
}
export default Home;