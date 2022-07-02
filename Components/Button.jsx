import styles from "../styles/Button.module.css";
import Link from "next/link";

function Button({size, colour, text, link }) {
  return (
    <Link href={link}>
      <a className={styles.butt}>
        <button className={styles[`${colour}`] + " " + styles[`${size}`]}>
          {text}
        </button>
      </a>
    </Link>
  );
}

export default Button