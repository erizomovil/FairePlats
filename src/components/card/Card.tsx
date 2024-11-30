import { useNavigate } from "react-router-dom";
import StaticStars from "../stars/StaticStars";
import "./Card.css";
import { MdOutlineTimer } from "react-icons/md";
import { useState } from "react";

type CardProps = {
  id: number;
  title: string;
  dificulty: number;
  time: number;
  image: string;
};



function Card(props: CardProps) {
  const [altActive, setAltActive] = useState(false);
  const navigate = useNavigate();
  const { id, title, dificulty, time, image } = props;

  function getImageSrc(image: string | undefined, altActive: boolean): string {
    if (altActive) {
      return "/img/placeholder_image.jpg";
    }
    return image || "/img/placeholder_image.jpg";
  }

  const handleNavigation = () => {
    navigate(`/RecipeDetails/${id}`);
  };
  return (
    <>
      <div className="recipe-card" onClick={handleNavigation}>
        <div className="recipe-card-content">
          <img
            src={getImageSrc(image, altActive)}
            alt="Fried Egg"
            className="recipe-card-image"
            onError={() => setAltActive(true)}
          />
          <div className="recipe-card-info">
            <div className="recipe-card-title">{title}</div>
            <div className="recipe-card-icons">
              {" "}
              <StaticStars rating={dificulty} />
            </div>
            <div className="recipe-card-description">
              {" "}
              <MdOutlineTimer className="recipe-card-timer" />
              <span>{time}'</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
