import React from "react";
import styles from "../styles/Title.module.css";

function Title({ text, align, size }) {
  return (
    <div
      className={styles.titleContainer}
      style={{ textAlign: `${align}`, fontSize: `${size}` }}
    >
      <h1 className={styles.title}>{text}</h1>
    </div>
  );
}

export default Title;
