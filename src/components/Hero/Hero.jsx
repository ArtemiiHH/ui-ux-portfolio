import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const CYCLE_WORDS = ["websites", "software", "design"];
const CYCLE_INTERVAL_MS = 2000;
const SETTLED_INDEX = CYCLE_WORDS.indexOf("software");

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Hero() {
  const [reducedMotion] = useState(prefersReducedMotion);
  const [activeIndex, setActiveIndex] = useState(
    reducedMotion ? SETTLED_INDEX : 0
  );
  const [previousIndex, setPreviousIndex] = useState(
    reducedMotion ? SETTLED_INDEX : 0
  );

  useEffect(() => {
    if (reducedMotion) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => {
        setPreviousIndex(prev);
        return (prev + 1) % CYCLE_WORDS.length;
      });
    }, CYCLE_INTERVAL_MS);

    return () => clearInterval(id);
  }, [reducedMotion]);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.headline}>
          <span className={styles.line}>Hi I am Mira Voss,</span>
          <span className={styles.line}>
            I design calm{" "}
            <span className={styles.wordStack}>
              {CYCLE_WORDS.map((word, index) => {
                let state = styles.idle;
                if (index === activeIndex) state = styles.active;
                else if (index === previousIndex) state = styles.exiting;

                return (
                  <span
                    key={word}
                    className={`${styles.accentWord} ${state}`}
                    aria-hidden={index === activeIndex ? undefined : "true"}
                  >
                    {word}
                  </span>
                );
              })}
            </span>
          </span>
        </h1>
      </div>
    </section>
  );
}
