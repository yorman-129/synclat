import React from "react";
import styles from "./Btn.module.css";
import { useNavigate } from "react-router-dom";

export const Btn = ({
  padding,
  bgColor,
  color,
  fontSize,
  fontWeight,
  width,
  height,
  text,
  path,
}) => {
  const btnStyles = {
    "--width": width,
    "--height": height,
    "--padding": padding,
    "--bgColor": bgColor,
    "--color": color,
    "--fontSize": fontSize,
    "--fontWeight": fontWeight,
  };
  const navigate = useNavigate(); // Hook llamado correctamente

  const handleNavigate = () => {
    if (path) {
      navigate(path); // Navega a la ruta especificada
    }
  };
  return (
    <button style={btnStyles} className={styles.btn} onClick={handleNavigate}>
      {text}
    </button>
  );
};
