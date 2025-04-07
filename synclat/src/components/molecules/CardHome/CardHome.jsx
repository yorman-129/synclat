import React from "react";
import { Btn } from "../../atoms/Btn/Btn";
import styles from "./CardHome.module.css";
import { AI } from "../../../SVG/AI";

export const CardHome = ({ title, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <AI width={60} height={60} />
      </div>
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>
      <div className={styles.text}>
        <p>{text}</p>
      </div>
      <div className={styles.btn}>
        <Btn
          text={"Access"}
          width={"200px"}
          height={"40px"}
          bgColor={"#8D3BF6"}
          color={"white"}
          fontSize={"16px"}
          path={"/login"}
        />
      </div>
    </div>
  );
};
