import ProjectCard from "../ProjectCard/ProjectCard.jsx";
import styles from "./WorkSection.module.css";
import { projects } from "../../data/projects.js";

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
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.card.title}
              tags={project.card.tags}
              image={project.card.image}
              alt={project.card.alt}
              featured={project.card.featured}
              delay={project.card.featured ? 0 : index * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
