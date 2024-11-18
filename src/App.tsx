import Home from "./pages/home/Home";
import RecipeDetails from "./pages/recipeDetails/RecipeDetails";
import Online from "./pages/online/Online";
import MyRecipes from "./pages/myRecipes/MyRecipes";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateRecipe from "./pages/createRecipe/CreateRecipe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/RecipeDetails" element={<RecipeDetails />} />
          <Route path="/home/Online" element={<Online />} />
          <Route path="/home/MyRecipes" element={<MyRecipes />} />
          <Route path="/CreateRecipe" element={<CreateRecipe />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
