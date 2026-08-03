import ProjectCard from "../ProjectCard/ProjectCard.jsx";
import styles from "./WorkSection.module.css";

const FEATURED_PROJECT = {
  title: "Northbound",
  tags: ["Fintech", "Mobile App", "UX Research"],
  imageSeed: "northbound-banking-app-redesign",
  imageAlt: "Northbound banking app interface shown on a phone screen",
};

const PROJECTS = [
  {
    title: "Loom Studio",
    tags: ["Branding", "Design System"],
    imageSeed: "loom-studio-brand-identity",
    imageAlt: "Loom Studio brand identity and design system pages",
  },
  {
    title: "Petal",
    tags: ["Health", "Mobile App"],
    imageSeed: "petal-wellness-app",
    imageAlt: "Petal wellness app screens",
  },
  {
    title: "Fernweg",
    tags: ["Travel", "Product Design"],
    imageSeed: "fernweg-travel-platform",
    imageAlt: "Fernweg travel booking platform interface",
  },
  {
    title: "Currents",
    tags: ["SaaS", "Data Viz"],
    imageSeed: "currents-analytics-dashboard",
    imageAlt: "Currents analytics dashboard interface",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Selected Work</h2>
          <p className={styles.description}>
            A handful of recent projects, from fintech products to brand
            systems built for teams that care about the details.
          </p>
        </div>

        <div className={styles.grid}>
          <ProjectCard {...FEATURED_PROJECT} featured />
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 80}
            />
          ))}
        </div>

        <div className={styles.ctaRow}>
          <a href="#work" className={styles.viewAllButton}>
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
