import { Rate } from "antd";
import "./RatingStars.css";

interface RatingStarsProps {
  onChange?: (value: number) => void;
}

const RatingStars: React.FC<RatingStarsProps> = ({ onChange }) => {
  const handleChange = (value: number) => {
    if (onChange) {
      onChange(value);
    }
  };
  return <Rate className="rating-star" onChange={handleChange} />;
};
export default RatingStars;
