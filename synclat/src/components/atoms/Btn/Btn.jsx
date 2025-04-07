import React from "react";
import styles from "./Btn.module.css";

export const Btn = ({
  padding,
  bgColor,
  color,
  fontSize,
  fontWeight,
  text,
}) => {
  const btnStyles = {
    "--padding": padding,
    "--bgColor": bgColor,
    "--color": color,
    "--fontSize": fontSize,
    "--fontWeight": fontWeight,
  };

  return (
    <button style={btnStyles} className={styles.btn}>
      {text}
    </button>
  );
};
