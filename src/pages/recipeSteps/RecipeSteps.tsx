import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./RecipeSteps.css";
import YoutubePlayer from "../../components/videoPlayer/youtubePlayer";

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
        <button
          className="recipe-details-back-button"
          onClick={handleNavigationHome}
        >
          <FaArrowLeft />
        </button>
        <YoutubePlayer id={idNum} />
      </div>
    </>
  );
}
export default RecipeSteps;
