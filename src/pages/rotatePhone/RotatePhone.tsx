import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";
import "./RotatePhone.css";

function RotatePhone() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log({ id });
  const handleNavigationHome = () => {
    navigate(`/Home`);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > window.innerHeight) {
        navigate(`/RecipeStep/${id}`);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navigate]);

  return (
    <>
      <div className="rotate">
        <button className="rotate-icon-back" onClick={handleNavigationHome}>
          <FaArrowLeft />
        </button>
        <div>
          <img
            src="/img/Rotate.png"
            alt="Rotate phone "
            className="rotate-image"
          />
        </div>
      </div>
    </>
  );
}
export default RotatePhone;
