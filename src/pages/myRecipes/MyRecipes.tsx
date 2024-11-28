import { useState } from "react";
import MenuSelector from "../../components/menuSelector/MenuSelector";
import Navbar from "../../components/navbar/Navbar";
import RecipesLists from "../../components/recipesList/RecipesList";
import "./MyRecipes.css";
import CustomMenuButton from "../../components/menuButton/MenuButton";
import { useNavigate } from "react-router-dom";

function MyRecipes() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <div className="body">
        <Navbar onSearchChange={setSearchTerm} />
        <MenuSelector buttonSelected={2} />
        <div className="myRecipes-button">
          <CustomMenuButton
            buttonName={"Create Recipe"}
            buttonStatus={1}
            onClick={() => handleNavigation("/CreateRecipe")}
          />
        </div>
        <RecipesLists searchTerm={searchTerm} />
      </div>
    </>
  );
}
export default MyRecipes;
