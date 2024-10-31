import Home from "./pages/home/Home"
import RecipeDetails from "./pages/recipeDetails/RecipeDetails";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/RecipeDetails" element={<RecipeDetails />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
