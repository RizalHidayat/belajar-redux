import React from "react";
import CardImage from "./CardImage";
import CardName from "./CardName";
// import { useSelector } from "react-redux/es/exports";

const Card = () => {
  return (
    <div>
      <CardName />
      <CardImage />
    </div>
  );
};

export default Card;
