import React from "react";
import classes from "./Button.module.scss";
const Button = (props) => {
  const { button } = classes;
  const { typeOfButton, onClick, children } = props;
  return (
    <button
      className={button}
      type={typeOfButton || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
