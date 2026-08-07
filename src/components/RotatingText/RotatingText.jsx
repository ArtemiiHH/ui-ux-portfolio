import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import styles from "./RotatingText.module.css";

const ROTATION_INTERVAL_MS = 2000;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function splitIntoCharacters(text) {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
    return Array.from(segmenter.segment(text), (part) => part.segment);
  }
  return Array.from(text);
}

function buildWords(text) {
  const words = text.split(" ");
  return words.map((word, index) => ({
    characters: splitIntoCharacters(word),
    needsSpace: index !== words.length - 1,
  }));
}

export default function RotatingText({
  prefix = "I design",
  texts = ["websites", "products", "experiences"],
  staggerFrom = "first",
  auto = true,
  duration = 450,
  staggerEach = 25,
  ease = "outCubic",
}) {
  const [reducedMotion] = useState(prefersReducedMotion);
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef(null);
  const badgeRef = useRef(null);
  const isAnimating = useRef(false);
  const hasSizedBadge = useRef(false);

  const words = useMemo(
    () => buildWords(texts[activeIndex] ?? ""),
    [texts, activeIndex]
  );

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const chars = content.querySelectorAll(`.${styles.char}`);
    if (!chars.length) return;

    if (reducedMotion) {
      chars.forEach((char) => {
        char.style.opacity = "1";
        char.style.transform = "translateY(0%)";
      });
      return;
    }

    isAnimating.current = true;
    animate(chars, {
      translateY: ["100%", "0%"],
      opacity: [0, 1],
      duration,
      delay: stagger(staggerEach, { from: staggerFrom }),
      ease,
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [activeIndex, words, reducedMotion, duration, staggerEach, staggerFrom, ease]);

  useEffect(() => {
    if (!auto || reducedMotion || texts.length <= 1) return;

    const id = setInterval(() => {
      if (isAnimating.current) return;

      const content = contentRef.current;
      const chars = content?.querySelectorAll(`.${styles.char}`);
      if (!chars?.length) {
        setActiveIndex((index) => (index + 1) % texts.length);
        return;
      }

      isAnimating.current = true;
      animate(chars, {
        translateY: ["0%", "-120%"],
        opacity: [1, 0],
        duration,
        delay: stagger(staggerEach, { from: staggerFrom }),
        ease,
        onComplete: () => {
          setActiveIndex((index) => (index + 1) % texts.length);
        },
      });
    }, ROTATION_INTERVAL_MS);

    return () => clearInterval(id);
  }, [auto, reducedMotion, texts.length, duration, staggerEach, staggerFrom, ease]);

  useLayoutEffect(() => {
    const badge = badgeRef.current;
    const content = contentRef.current;
    if (!badge || !content) return;

    const nextWidth = content.scrollWidth;

    if (!hasSizedBadge.current || reducedMotion) {
      hasSizedBadge.current = true;
      badge.style.width = `${nextWidth}px`;
      return;
    }

    animate(badge, { width: nextWidth, duration, ease });
  }, [words, reducedMotion, duration, ease]);

  return (
    <span className={styles.wrap}>
      {prefix ? <span className={styles.prefix}>{prefix}</span> : null}
      <span ref={badgeRef} className={styles.badge}>
        <span className={styles.srOnly}>
          {prefix ? `${prefix} ` : ""}
          {texts[activeIndex]}
        </span>
        <span ref={contentRef} aria-hidden="true" className={styles.content}>
          {words.map((word, wordIndex) => (
            <span key={`${activeIndex}-${wordIndex}`} className={styles.word}>
              {word.characters.map((char, charIndex) => (
                <span
                  key={`${activeIndex}-${wordIndex}-${charIndex}`}
                  className={styles.char}
                >
                  {char === " " ? " " : char}
                </span>
              ))}
              {word.needsSpace ? (
                <span className={styles.space}> </span>
              ) : null}
            </span>
          ))}
        </span>
      </span>
    </span>
  );
}
