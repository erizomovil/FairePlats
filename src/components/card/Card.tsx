import "./Card.css";
import { IoStarSharp } from "react-icons/io5";
import { MdTimer } from "react-icons/md";

type CardProps = {
  title: string;
};

function Card(props: CardProps) {
  const { title } = props;
  return (
    <>
      <div className="card">
        <div className="card-content">
          <img
            src="ruta/a/tu/imagen.jpg"
            alt="Fried Egg"
            className="card-image"
          />
          <div className="card-info">
            <div className="card-title">{title}</div>
            <div className="card-icons">
              <IoStarSharp className="star-full" />
              <IoStarSharp className="star-empty" />
              <IoStarSharp className="star-empty" />
              <IoStarSharp className="star-empty" />
              <IoStarSharp className="star-empty" />
            </div>
            <div className="card-description">
              {" "}
              <MdTimer className="timer" />
              5'
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
