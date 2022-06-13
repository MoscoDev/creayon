import styles from "../styles/Button.module.css";

function Button({size, colour, text, link }) {
  return (
    <a className={styles.butt} href={link}>
      <div className={styles[`${ colour }`] + " " + styles[`${ size }`]}>{text}</div>
      {console.log({ colour })}
    </a>
  );
}

export default Button