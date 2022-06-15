import React from "react";
import styles from "../styles/Title.module.css";

function Title({ text }) {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>{text}</h1>
    </div>
  );
}

export default Title;
