import { useState } from "react";
import MenuSelector from "../../components/menuSelector/MenuSelector";
import Navbar from "../../components/navbar/Navbar";
import RecipesLists from "../../components/recipesList/RecipesList";
import "./Online.css";

function Online() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <>
      <div className="body">
        <Navbar onSearchChange={setSearchTerm} />
        <MenuSelector buttonSelected={3} />
        <RecipesLists searchTerm={searchTerm} />
      </div>
    </>
  );
}
export default Online;
