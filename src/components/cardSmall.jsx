import React from "react";
import "../styles/cardSmall.css";

const cardSmall = (props) => {
  return (
    <div className="cardSmall">
      <img src={props.image} alt="" />

      <h2>{props.heading}</h2>
    </div>
  );
};
export default cardSmall;
