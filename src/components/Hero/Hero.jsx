import RotatingText from "../RotatingText/RotatingText.jsx";
import styles from "./Hero.module.css";

const CYCLE_WORDS = ["websites", "products", "experiences"];

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.headline}>
          <span className={styles.line}>Hi I am Artemii,</span>
          <span className={styles.line}>
            <RotatingText prefix="I design" texts={CYCLE_WORDS} />
          </span>
        </h1>
      </div>
    </section>
  );
}
