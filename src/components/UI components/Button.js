import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${classes.btn} ${classes[props.btnType]}`}
      onClick={props.click}
    >
      {props.value}
      {props.children}
    </button>
  );
};

export default Button;
