import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./RecipeSteps.css";
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";

function RecipeSteps() {
  const navigate = useNavigate();
  const { id } = useParams();
  const idNum = Number(id);
  console.log({ id });
  const handleNavigationHome = () => {
    navigate(`/Home`);
  };

  return (
    <>
      <div className="recipeSteps">
        <div className="recipeSteps-videoHolder">
          <VideoPlayer id={idNum} />
        </div>
        <button
          className="recipe-details-back-button"
          onClick={handleNavigationHome}
        >
          <FaArrowLeft />
        </button>
      </div>
    </>
  );
}
export default RecipeSteps;
