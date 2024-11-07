import StaticStars from "../stars/StaticStars";
import "./Card.css";
import { MdOutlineTimer } from "react-icons/md";

type CardProps = {
  title: string;
};

function Card(props: CardProps) {
  const { title } = props;
  return (
    <>
      <div className="recipe-card">
        <div className="recipe-card-content">
          <img
            src="ruta/a/tu/imagen.jpg"
            alt="Fried Egg"
            className="recipe-card-image"
          />
          <div className="recipe-card-info">
            <div className="recipe-card-title">{title}</div>
            <div className="recipe-card-icons">
              {" "}
              <StaticStars />
            </div>
            <div className="recipe-card-description">
              {" "}
              <MdOutlineTimer className="recipe-card-timer" />
              5'
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
