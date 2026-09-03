import { Palette } from "lucide-react";
import useScrollReveal from "../../hooks/useScrollReveal.js";
import styles from "./AboutSection.module.css";
import aboutImage from "../../public/about-image-compressed.jpg";
import cvFile from "../../public/cv-artemii-barashkov-product-designer.pdf";

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
              I'm a UI/UX Designer based in Limassol, Cyprus. I love designing and building my own digital products, mostly because I can't resist a good UI. There's something satisfying about getting the details right, from how the interface looks – down to the code.
            </p>
            <p className={styles.paragraph}>
              Outside of work, I trade the screen for the gym, I also love boxing, running, camping and hiking.
            </p>
            <a
              href={cvFile}
              target="_blank"
              rel="noreferrer"
              className={styles.ctaButton}
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
