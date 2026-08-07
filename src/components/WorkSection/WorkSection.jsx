import ProjectCard from "../ProjectCard/ProjectCard.jsx";
import styles from "./WorkSection.module.css";
import tpgmsMockup from "../../public/tpgms-mockup.png";

export default function WorkSection() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Selected Work</h2>
          <p className={styles.description}>
            A handful of recent projects, from fintech products to brand systems
            built for teams that care about the details.
          </p>
        </div>

        <div className={styles.grid}>
          <ProjectCard
            title="TPGMS Website Redesign"
            tags={["Fintech", "Mobile App", "UX Research"]}
            image={tpgmsMockup}
            alt="TPGMS website redesign mockup"
            featured
          />
          <ProjectCard
            title="Loom Studio"
            tags={["Branding", "Design System"]}
            image={tpgmsMockup}
            alt="Loom Studio brand identity and design system pages"
            delay={0}
          />
          <ProjectCard
            title="Petal"
            tags={["Health", "Mobile App"]}
            image={tpgmsMockup}
            alt="Petal wellness app screens"
            delay={80}
          />
        </div>
      </div>
    </section>
  );
}
