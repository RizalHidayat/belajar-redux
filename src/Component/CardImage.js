import React from "react";

import { useSelector } from "react-redux/es/exports";

const CardImage = () => {
  const { data } = useSelector((state) => state);

  return (
    <div>
      <img src={data.avatar} alt="avatar" />
    </div>
  );
};

export default CardImage;
