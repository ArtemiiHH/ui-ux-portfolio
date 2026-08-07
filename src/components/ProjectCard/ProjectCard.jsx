import useScrollReveal from "../../hooks/useScrollReveal.js";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({
  title,
  tags,
  image,
  alt,
  featured = false,
  delay = 0,
}) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <article
      ref={ref}
      className={`reveal ${isVisible ? "isVisible" : ""} ${styles.card} ${
        featured ? styles.featured : ""
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      <div className={styles.imageWrap}>
        <img src={image} alt={alt} className={styles.image} loading="lazy" />
      </div>
      <div className={styles.meta}>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.tags}>
          {tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
