import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.headline}>
          <span className={styles.line}>Hi I am Mira Voss,</span>
          <span className={styles.line}>
            I design calm <span className={styles.accentWord}>software</span>
          </span>
        </h1>
      </div>
    </section>
  );
}
