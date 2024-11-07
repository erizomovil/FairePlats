import React from "react";
import { Rate } from "antd";
import "antd/dist/reset.css";
import "./StaticStars.css";

const StaticStars: React.FC = () => (
  <Rate disabled defaultValue={1} className="star-full" />
);

export default StaticStars;
