import { Palette } from "lucide-react";
import useScrollReveal from "../../hooks/useScrollReveal.js";
import styles from "./AboutSection.module.css";
import aboutImage from "../../public/about-image-compressed.jpg";

export default function AboutSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div
          ref={ref}
          className={`reveal ${isVisible ? "isVisible" : ""} ${styles.card}`}
        >
          <div className={styles.imageColumn}>
            <img
              className={styles.portrait}
              src={aboutImage}
              alt="Portrait of Artemii Barashkov"
              loading="lazy"
            />
          </div>

          <div className={styles.textColumn}>
            <span className={styles.eyebrow}>Behind the work</span>
            <h2 className={styles.heading}>About me</h2>
            <p className={styles.paragraph}>
              I am a UI/UX Designer based in Limassol, Cyprus, working with startups and
              small teams to turn rough ideas into interfaces people actually
              enjoy using. Most of my time goes into fintech and wellness
              products, though I take on a brand project when the fit feels
              right.
            </p>
            <p className={styles.paragraph}>
              I care about the parts most people skip: empty states, loading
              moments, the third click. Good design shows up in those details as
              much as it does in the hero shot.
            </p>
            <a href="#contact" className={styles.ctaButton}>
              View CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
