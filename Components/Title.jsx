import React from "react";
import styles from "../styles/Title.module.css";

function Title({ text, align, size }) {
  return (
    <div
      className={styles.titleContainer}
      
    >
      <h1 className={styles.title}  style={{ textAlign: align, fontSize: size }}>{text}</h1>
    </div>
  );
}

export default Title;
