import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./CreateRecipeSteps.css";
import AddSteps from "../../components/addSteps/AddSteps";

function CreateRecipeSteps() {
  const navigate = useNavigate();
  const handleNavigationHome = () => {
    navigate(`/CreateRecipe`);
  };

  const manejarBotonClick = () => {
    console.log("tito");
    navigate(`/Home/MyRecipes`);
  };

  return (
    <>
      <div className="createRecipeSteps">
        <button
          className="createRecipeSteps-back-button"
          onClick={handleNavigationHome}
        >
          <FaArrowLeft />
        </button>
        <div className="createRecipeSteps-title">Steps</div>
        <div className="createRecipeSteps-barrier"></div>
        <div className="createRecipeSteps-list">
          <AddSteps />
        </div>
        <div className="createRecipeSteps-barrier"></div>
        <div
          className="createRecipeSteps-continue-button"
          onClick={manejarBotonClick}
        >
          <div className="createRecipeSteps-continue-button-text">Continue</div>
        </div>
      </div>
    </>
  );
}
export default CreateRecipeSteps;
