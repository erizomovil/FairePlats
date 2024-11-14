import StaticStars from "../stars/StaticStars";
import "./Card.css";
import { MdOutlineTimer } from "react-icons/md";

type CardProps = {
  title: string;
  dificulty: number;
  time: number;
};

function Card(props: CardProps) {
  const { title, dificulty, time } = props;
  return (
    <>
      <div className="recipe-card">
        <div className="recipe-card-content">
          <img
            src="/img/fried_egg.jpg"
            alt="Fried Egg"
            className="recipe-card-image"
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
