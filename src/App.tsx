import Home from "./pages/home/Home";
import RecipeDetails from "./pages/recipeDetails/RecipeDetails";
import Online from "./pages/online/Online";
import MyRecipes from "./pages/myRecipes/MyRecipes";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateRecipe from "./pages/createRecipe/CreateRecipe";
import RecipeSteps from "./pages/recipeSteps/RecipeSteps";
import RotatePhone from "./pages/rotatePhone/RotatePhone";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/RecipeDetails/:id" element={<RecipeDetails />} />
          <Route path="/Home/Online" element={<Online />} />
          <Route path="/Home/MyRecipes" element={<MyRecipes />} />
          <Route path="/CreateRecipe" element={<CreateRecipe />} />
          <Route path="/RecipeStep/:id" element={<RecipeSteps />} />
          <Route path="/RotatePhone/:id" element={<RotatePhone />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
