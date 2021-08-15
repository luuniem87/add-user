import React from "react";
import classes from "./Card.module.scss";

const Card = (props) => {
  const { children, className } = props;
  const { card } = classes;
  return <div className={`${card} ${className}`}>{children}</div>;
};

export default Card;
