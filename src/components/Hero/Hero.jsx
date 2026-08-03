import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import styles from "./Hero.module.css";

const CYCLE_WORDS = ["websites", "products", "experiences"];
const CYCLE_INTERVAL_MS = 2000;
const EXIT_DURATION_MS = 450;
const LETTER_DURATION_MS = 600;
const LETTER_STAGGER_MS = 25;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function dropInLetters(letters) {
  const targets = letters?.filter(Boolean);
  if (!targets?.length) return;

  animate(targets, {
    translateY: ["-120%", "0%"],
    opacity: [0, 1],
    duration: LETTER_DURATION_MS,
    delay: stagger(LETTER_STAGGER_MS),
    ease: "outCubic",
  });
}

export default function Hero() {
  const [reducedMotion] = useState(prefersReducedMotion);
  const [activeIndex, setActiveIndex] = useState(0);
  const wordRefs = useRef([]);
  const letterRefs = useRef([]);

  useEffect(() => {
    if (reducedMotion) return;
    dropInLetters(letterRefs.current[activeIndex]);
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % CYCLE_WORDS.length;
        const outgoingEl = wordRefs.current[prev];
        const incomingEl = wordRefs.current[nextIndex];

        if (outgoingEl) {
          animate(outgoingEl, {
            opacity: [1, 0],
            duration: EXIT_DURATION_MS,
            ease: "outCubic",
          });
        }

        if (incomingEl) {
          incomingEl.style.opacity = "1";
        }

        dropInLetters(letterRefs.current[nextIndex]);

        return nextIndex;
      });
    }, CYCLE_INTERVAL_MS);

    return () => clearInterval(id);
  }, [reducedMotion]);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.headline}>
          <span className={styles.line}>Hi I am Artemii,</span>
          <span className={styles.line}>
            I design{" "}
            <span className={styles.wordStack}>
              {CYCLE_WORDS.map((word, index) => {
                const isActive = index === activeIndex;

                return (
                  <span
                    key={word}
                    ref={(el) => {
                      wordRefs.current[index] = el;
                      if (el && !el.dataset.initialized) {
                        el.style.opacity = isActive ? "1" : "0";
                        el.dataset.initialized = "true";
                      }
                    }}
                    className={styles.accentWord}
                    aria-hidden={isActive ? undefined : "true"}
                  >
                    {word.split("").map((letter, letterIndex) => (
                      <span
                        key={letterIndex}
                        ref={(el) => {
                          if (!letterRefs.current[index]) {
                            letterRefs.current[index] = [];
                          }
                          letterRefs.current[index][letterIndex] = el;

                          if (el && !el.dataset.initialized) {
                            el.style.transform = isActive
                              ? "translateY(0%)"
                              : "translateY(-120%)";
                            el.style.opacity = isActive ? "1" : "0";
                            el.dataset.initialized = "true";
                          }
                        }}
                        className={styles.letter}
                      >
                        {letter}
                      </span>
                    ))}
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
