import React from "react";
import { Rate } from "antd";
import "antd/dist/reset.css";
import "./StaticStars.css";

type StaticStarsProp = {
  rating: number;
};

const StaticStars: React.FC<StaticStarsProp> = ({ rating }) => (
  <Rate disabled defaultValue={rating} className="star-full" />
);

export default StaticStars;
